"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appLoader_1 = __importDefault(require("./appLoader"));
class AppController extends appLoader_1.default {
    getSources(callback) {
        super.getResp({
            endpoint: 'sources',
        }, callback);
    }
    getNews(e, callback) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        while (target !== newsContainer) {
            if (target === null || target === void 0 ? void 0 : target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if ((newsContainer === null || newsContainer === void 0 ? void 0 : newsContainer.getAttribute('data-source')) !== sourceId) {
                    newsContainer === null || newsContainer === void 0 ? void 0 : newsContainer.setAttribute('data-source', sourceId);
                    super.getResp({
                        endpoint: 'everything',
                        options: {
                            sources: sourceId,
                        },
                    }, callback);
                }
                return;
            }
            target = target.parentNode;
        }
    }
}
exports.default = AppController;
