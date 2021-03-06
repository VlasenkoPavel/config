"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const Config_1 = require("./Config");
class PostgresConfig extends Config_1.Config {
    constructor() {
        super(...arguments);
        this.type = 'postgres';
    }
    async validate() {
        super.validate();
        super.validateIpOrHostname(this.host, 'host');
    }
    getName() {
        return 'db';
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PostgresConfig.prototype, "host", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], PostgresConfig.prototype, "database", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], PostgresConfig.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], PostgresConfig.prototype, "password", void 0);
__decorate([
    class_validator_1.IsString({ each: true }),
    class_validator_1.Matches(/^(([a-z0-9]*)|(\.\/)|((\.\.\/)*))(\/*([a-z0-9]+\/)*)/, { each: true }),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], PostgresConfig.prototype, "entities", void 0);
__decorate([
    class_validator_1.IsString({ each: true }),
    class_validator_1.Matches(/^(([a-z0-9]*)|(\.\/)|((\.\.\/)*))(\/*([a-z0-9]+\/)*)/, { each: true }),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], PostgresConfig.prototype, "migrations", void 0);
exports.PostgresConfig = PostgresConfig;
//# sourceMappingURL=PostgresConfig.js.map