"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loader_1 = __importDefault(require("./loader"));
class AppLoader extends loader_1.default {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0defa6144a8e4c0889c99701e4bbd364',
        });
    }
}
exports.default = AppLoader;
