# Useful Commands Cheat Sheet

- `nest g resource <resource_name>`  
  Module, service, controller aur basic CRUD structure generate karta hai.

- `npx prisma generate`  
  Prisma client ko update karta hai taake latest schema changes database me reflect ho.

- `npx prisma migrate dev --name <migration_name>`  
  Jab **schema.prisma me changes** kiye hon (naya table, column, relation).  
  Ye **nayi migration file create** karta hai aur DB me apply karta hai.  
  Example: User table me naya column add kiya.

- `npx prisma migrate dev`  
  Jab project **clone** kiya ho aur `migrations` folder already mojood ho.  
  Ye sirf **existing migrations ko DB me apply** karta hai, nayi file nahi banata.  
  Example: Fresh database setup after clone.
- `npx prisma migrate reset`  
  Database wipe & reset karta hai aur latest migrations apply karta hai (development use).

- `npx prisma studio`  
  Web-based database viewer, tables aur data easily dekh aur edit kar sakte ho.

- `git checkout .`  
  Working directory me kiye gaye unsaved changes undo karne ke liye.

- `git reset --hard`  
  Repository ko last commit tak reset karta hai, saari changes lose ho jati hain.

- `npm run dev`  
  Local development server start karta hai (NestJS ya frontend project ke liye).
