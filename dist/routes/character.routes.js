"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const character_control_1 = require("../controllers/character.control");
const router = (0, express_1.default)();
//endpoints
router.get('/', character_control_1.getCharacters);
router.get('/:id', character_control_1.getCharacter);
router.delete('/:id', character_control_1.deleteCharacter);
router.post('/', character_control_1.postCharacter);
router.put('/:id', character_control_1.putCharacter);
exports.default = router;
