# express-locallibrary
Express tutorial Local library


## Library
`eslint`: Linter (bộ kiểm tra lỗi) chính
`prettier`: Code formatter chính
`eslint-config-prettier`: Cấu hình ESLint để không bị xung đột với Prettier
`eslint-plugin-prettier`: Dùng thêm một số rule prettier cho eslint
`@typescript-eslint/eslint-plugin`: ESLint plugin cung cấp các rule cho Typescript
`@typescript-eslint/parser`: Parser cho phép ESLint kiểm tra lỗi Typescript
`ts-node`: Dùng để chạy TypeScript code trực tiếp mà không cần build
`tsc-alias`: Xử lý alias khi build
`tsconfig-paths`: Khi setting alias import trong dự án dùng ts-node thì chúng ta cần dùng tsconfig-paths để nó hiểu được paths và baseUrl trong file tsconfig.json
`rimraf`: Dùng để xóa folder dist khi trước khi build
`nodemon`: Dùng để tự động restart server khi có sự thay đổi trong code

## Commands
### Install packages
```
npm i
```

### Build
```
npm run build
```

### Run
```
npm run server:start
```
