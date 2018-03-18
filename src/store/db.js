import Dexie from 'dexie';

const db = new Dexie('app');

db.version(1).stores({
  forms: '++id, name, description, *questions',
  questions: '++id, prompt, type, options',
  responses: '++id, formId, questions',
});

export default db;
