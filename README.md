# caring-back

## Requisitos
- Node.js 18+
- MySQL (Homebrew)

## Base de datos

```bash
# Iniciar MySQL
brew services start mysql

# Parar MySQL
brew services stop mysql

# Ver estado
brew services list | grep mysql

# Conectar al cliente MySQL
mysql -u root -p
```

## Arrancar el servidor

```bash
pnpm install
pnpm dev
```
