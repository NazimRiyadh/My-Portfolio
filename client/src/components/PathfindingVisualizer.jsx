import React, { useEffect, useRef, useCallback } from 'react';

// ─────────────────── A* Pathfinding ───────────────────
const ROWS = 18;
const COLS = 28;
const WALL_PROB = 0.25;

function buildGrid() {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({ wall: Math.random() < WALL_PROB }))
  );
}

function heuristic(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function astar(grid, start, end) {
  const key = (r, c) => `${r},${c}`;
  const open = new Map();
  const closed = new Set();
  const gScore = {};
  const fScore = {};
  const parent = {};
  const visited = []; // order of expanded nodes

  gScore[key(...start)] = 0;
  fScore[key(...start)] = heuristic(start, end);
  open.set(key(...start), start);

  const dirs = [[0,1],[1,0],[0,-1],[-1,0]];

  while (open.size > 0) {
    // Pick node with lowest f
    let cur = null;
    let curKey = null;
    let lowestF = Infinity;
    for (const [k, node] of open) {
      if ((fScore[k] ?? Infinity) < lowestF) {
        lowestF = fScore[k];
        cur = node;
        curKey = k;
      }
    }

    if (!cur) break;
    if (cur[0] === end[0] && cur[1] === end[1]) {
      // Reconstruct path
      const path = [];
      let c = key(...end);
      while (parent[c]) {
        const [r, col] = c.split(',').map(Number);
        path.unshift([r, col]);
        c = parent[c];
      }
      path.unshift(start);
      return { visited, path };
    }

    open.delete(curKey);
    closed.add(curKey);
    visited.push([...cur]);

    for (const [dr, dc] of dirs) {
      const nr = cur[0] + dr;
      const nc = cur[1] + dc;
      if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) continue;
      if (grid[nr][nc].wall) continue;
      const nk = key(nr, nc);
      if (closed.has(nk)) continue;

      const tentative = (gScore[curKey] ?? 0) + 1;
      if (tentative < (gScore[nk] ?? Infinity)) {
        parent[nk] = curKey;
        gScore[nk] = tentative;
        fScore[nk] = tentative + heuristic([nr, nc], end);
        open.set(nk, [nr, nc]);
      }
    }
  }

  return { visited, path: [] };
}

function pickEndpoints(grid) {
  const free = [];
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      if (!grid[r][c].wall) free.push([r, c]);

  if (free.length < 2) return { start: [0, 0], end: [ROWS - 1, COLS - 1] };

  // Pick start near top-left, end near bottom-right
  const candidates = [...free];
  const startCands = candidates.filter(([r, c]) => r < ROWS * 0.35 && c < COLS * 0.35);
  const endCands = candidates.filter(([r, c]) => r > ROWS * 0.65 && c > COLS * 0.65);

  const start = startCands.length
    ? startCands[Math.floor(Math.random() * startCands.length)]
    : free[0];
  const end = endCands.length
    ? endCands[Math.floor(Math.random() * endCands.length)]
    : free[free.length - 1];

  return { start, end };
}

// ─────────────────── Component ───────────────────
const CELL_SIZE = 18; // px

function PathfindingVisualizer() {
  const canvasRef = useRef(null);
  const animStateRef = useRef(null);

  const runAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Cancel any running animation
    if (animStateRef.current) {
      animStateRef.current.cancelled = true;
    }

    const state = { cancelled: false };
    animStateRef.current = state;

    // Build grid + solve
    let grid = buildGrid();
    let { start, end } = pickEndpoints(grid);
    // Ensure start/end are not walls
    grid[start[0]][start[1]].wall = false;
    grid[end[0]][end[1]].wall = false;

    const { visited, path } = astar(grid, start, end);

    // If no path, retry once
    if (path.length === 0) {
      grid = buildGrid();
      ({ start, end } = pickEndpoints(grid));
      grid[start[0]][start[1]].wall = false;
      grid[end[0]][end[1]].wall = false;
      const result = astar(grid, start, end);
      if (result.path.length === 0) {
        // Just clear walls from a corridor and retry
        for (let r = 0; r < ROWS; r++) grid[r][Math.floor(COLS / 2)].wall = false;
        const r2 = astar(grid, start, end);
        return run(ctx, canvas, state, grid, start, end, r2.visited, r2.path);
      }
      return run(ctx, canvas, state, grid, start, end, result.visited, result.path);
    }

    run(ctx, canvas, state, grid, start, end, visited, path);
  }, []);

  function run(ctx, canvas, state, grid, start, end, visited, path) {
    const W = canvas.width;
    const H = canvas.height;

    // Resolve CSS variables for colors
    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue('--action-primary').trim() || '#0055ff';
    const accentSignal = style.getPropertyValue('--accent-signal').trim() || '#ef4444';
    const bgPrimary = style.getPropertyValue('--bg-primary').trim() || '#fdfcfc';
    const bgTertiary = style.getPropertyValue('--bg-tertiary').trim() || '#f5f3ef';
    const borderColor = style.getPropertyValue('--border-strong').trim() || 'rgba(32,29,29,0.18)';
    const textTertiary = style.getPropertyValue('--text-tertiary').trim() || '#8f8585';

    function drawGrid(visitedSet, pathSet) {
      ctx.clearRect(0, 0, W, H);

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * CELL_SIZE;
          const y = r * CELL_SIZE;
          const key = `${r},${c}`;
          const isStart = r === start[0] && c === start[1];
          const isEnd = r === end[0] && c === end[1];

          if (isStart) {
            ctx.fillStyle = accent;
            ctx.fillRect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 8px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('S', x + CELL_SIZE / 2, y + CELL_SIZE / 2 + 3);
          } else if (isEnd) {
            ctx.fillStyle = accentSignal;
            ctx.fillRect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 8px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('E', x + CELL_SIZE / 2, y + CELL_SIZE / 2 + 3);
          } else if (grid[r][c].wall) {
            ctx.fillStyle = borderColor;
            ctx.fillRect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
          } else if (pathSet.has(key)) {
            // Final path
            ctx.fillStyle = accent;
            ctx.globalAlpha = 0.85;
            ctx.fillRect(x + 2, y + 2, CELL_SIZE - 4, CELL_SIZE - 4);
            ctx.globalAlpha = 1;
          } else if (visitedSet.has(key)) {
            // Explored nodes
            ctx.fillStyle = accent;
            ctx.globalAlpha = 0.15;
            ctx.fillRect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
            ctx.globalAlpha = 1;
          } else {
            ctx.fillStyle = bgPrimary;
            ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
          }

          // Grid lines
          ctx.strokeStyle = textTertiary;
          ctx.globalAlpha = 0.06;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);
          ctx.globalAlpha = 1;
        }
      }
    }

    // Phase 1: Animate visited nodes expansion
    let vi = 0;
    const visitedSet = new Set();
    const pathSet = new Set();

    const VISIT_SPEED = 18; // ms per visited node
    const PATH_SPEED = 40;  // ms per path node
    const PAUSE_BEFORE_RESTART = 1800; // ms before next run

    function animateVisited() {
      if (state.cancelled) return;
      if (vi < visited.length) {
        visitedSet.add(`${visited[vi][0]},${visited[vi][1]}`);
        vi++;
        drawGrid(visitedSet, pathSet);
        setTimeout(animateVisited, VISIT_SPEED);
      } else {
        // Phase 2: Animate path
        animatePath();
      }
    }

    let pi = 0;
    function animatePath() {
      if (state.cancelled) return;
      if (pi < path.length) {
        pathSet.add(`${path[pi][0]},${path[pi][1]}`);
        pi++;
        drawGrid(visitedSet, pathSet);
        setTimeout(animatePath, PATH_SPEED);
      } else {
        // Pause then restart
        setTimeout(() => {
          if (!state.cancelled) runAnimation();
        }, PAUSE_BEFORE_RESTART);
      }
    }

    // Initial draw then start
    drawGrid(new Set(), new Set());
    setTimeout(animateVisited, 300);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = COLS * CELL_SIZE;
    canvas.height = ROWS * CELL_SIZE;
    runAnimation();
    return () => {
      if (animStateRef.current) animStateRef.current.cancelled = true;
    };
  }, [runAnimation]);

  return (
    <div className="relative w-full overflow-hidden border border-hairline-strong bg-canvas">
      {/* Terminal header */}
      <div className="h-8 bg-surface-soft border-b border-hairline-strong px-3 flex items-center justify-between select-none">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-hairline-strong opacity-40" />
          <div className="w-2.5 h-2.5 rounded-full bg-hairline-strong opacity-40" />
          <div className="w-2.5 h-2.5 rounded-full bg-hairline-strong opacity-40" />
        </div>
        <span className="text-[9px] text-mute font-mono uppercase tracking-widest">
          astar.pathfinder // live
        </span>
        <span className="text-[9px] text-accent-signal font-mono animate-pulse">●</span>
      </div>

      {/* Canvas wrapper — auto-scales */}
      <div className="w-full overflow-hidden flex items-center justify-center bg-canvas p-0">
        <canvas
          ref={canvasRef}
          style={{ imageRendering: 'pixelated', display: 'block', maxWidth: '100%' }}
        />
      </div>

      {/* Legend */}
      <div className="px-3 py-2 border-t border-hairline flex flex-wrap gap-4 text-[9px] font-mono text-mute select-none">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-accent inline-block" />
          start / path
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-accent-signal inline-block" />
          goal
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-accent opacity-20 inline-block" />
          explored
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-hairline-strong inline-block" />
          wall
        </span>
        <span className="ml-auto">algo: A* (manhattan heuristic)</span>
      </div>
    </div>
  );
}

export default PathfindingVisualizer;
