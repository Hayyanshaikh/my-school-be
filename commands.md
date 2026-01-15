| Command                                          | Variable / Placeholder | Purpose                                                                                  |
| ------------------------------------------------ | ---------------------- | ---------------------------------------------------------------------------------------- |
| `nest g resource <resource_name>`                | `<resource_name>`      | Module, service, controller aur basic CRUD structure generate karta hai.                 |
| `npx prisma generate`                            | -                      | Prisma client ko update karta hai taake latest schema changes database me reflect ho.    |
| `npx prisma migrate dev --name <migration_name>` | `<migration_name>`     | Database me schema changes apply karne ke liye migration create aur run karta hai.       |
| `npx prisma migrate reset`                       | -                      | Database wipe & reset karta hai aur latest migrations apply karta hai (development use). |
| `npx prisma studio`                              | -                      | Web-based database viewer, tables aur data easily dekh aur edit kar sakte ho.            |
| `git checkout .`                                 | -                      | Working directory me kiye gaye unsaved changes undo karne ke liye.                       |
| `git reset --hard`                               | -                      | Repository ko last commit tak reset karta hai, saari changes lose ho jati hain.          |
