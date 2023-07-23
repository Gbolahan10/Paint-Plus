"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_1 = tslib_1.__importDefault(require("./server"));
// import QueueSub from '@/queue/subscriber';
// import AuthRoute from '@routes/auth.route';
const index_route_1 = tslib_1.__importDefault(require("./src/routes/index.route"));
// import UsersRoute from '@routes/users.route';
// import WalletRoute from '@routes/thresh0ld/wallet.route';
// import AdminRoute from '@routes/admin/admin.route';
// import CallbackRoute from '@/routes/thresh0ld/callback.route';
// import InvoiceRoute from '@routes/invoices.route';
const validateEnv_1 = tslib_1.__importDefault(require("./src/utils/helpers/validateEnv"));
// import TransactionsRoute from './routes/transactions.route';
(0, validateEnv_1.default)();
const app = new server_1.default([
    new index_route_1.default(),
    //   new UsersRoute(),
    //   new AuthRoute(),
    //   new WalletRoute(),
    //   new AdminRoute(),
    //   new CallbackRoute(),
    //   new InvoiceRoute(),
    //   new TransactionsRoute(),
]);
//new QueueSub();
app.listen();
//# sourceMappingURL=app.js.map