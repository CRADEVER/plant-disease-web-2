// This app doesn't require persistent storage
// All data is handled client-side or in-memory

export interface IStorage {
  // Add storage methods here if needed in the future
}

export class MemStorage implements IStorage {
  constructor() {
    // Initialize if needed
  }
}

export const storage = new MemStorage();
