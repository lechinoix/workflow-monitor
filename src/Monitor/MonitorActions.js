export const INIT_SESSION = 'INIT_SESSION';
export const START_SESSION = 'START_SESSION';
export const NEXT_TASK = 'NEXT_TASK';
export const RESET_MONITOR = 'RESET_MONITOR';
export const PLAY_OR_PAUSE_SESSION = 'PLAY_OR_PAUSE_SESSION';

export function initSession() {
  return {
    type: INIT_SESSION,
  };
}

export function startSession(tasks) {
  return {
    type: START_SESSION,
    tasks,
  };
}

export function nextTask(newTasks, taskProblems) {
  return {
    type: NEXT_TASK,
    newTasks,
    taskProblems,
  };
}

export function playOrPauseSession() {
  return {
    type: PLAY_OR_PAUSE_SESSION,
  };
}

export function resetMonitor() {
  return {
    type: RESET_MONITOR,
  };
}
