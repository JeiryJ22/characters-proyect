"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putCharacter = exports.postCharacter = exports.deleteCharacter = exports.getCharacter = exports.getCharacters = void 0;
const character_model_1 = __importDefault(require("../models/character.model"));
const getCharacters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const charactersList = yield character_model_1.default.findAll();
    res.json(charactersList);
});
exports.getCharacters = getCharacters;
const getCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const character = yield character_model_1.default.findByPk(id);
    if (character) {
        res.json(character);
    }
    else {
        res.status(404).json({
            mensaje: `Can't find the character`
        });
    }
});
exports.getCharacter = getCharacter;
const deleteCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const character = yield character_model_1.default.findByPk(id);
    if (!character) {
        res.status(404).json({
            mensaje: `Can't delete the character`
        });
    }
    else {
        yield character.destroy();
        res.json({
            mensaje: 'Successfully deleted!',
            id
        });
    }
});
exports.deleteCharacter = deleteCharacter;
const postCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const character = yield character_model_1.default.create(body);
    try {
        if (character) {
            res.json({
                mensaje: 'Successfully posted',
            });
        }
        else {
            res.status(404).json({
                mensaje: `Can't post the character`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            mensaje: 'You`re having troubles, comuicate with @jeiry300@gmail.com'
        });
    }
});
exports.postCharacter = postCharacter;
const putCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const character = yield character_model_1.default.findByPk(id);
    try {
        if (character) {
            yield character.update(body);
            res.json({
                mensaje: `Successfully updated`
            });
        }
        else {
            res.status(404).json({
                mensaje: `Couldn't find the character `
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            mensaje: 'You`re having troubles, comuicate with @jeiry300@gmail.com'
        });
    }
});
exports.putCharacter = putCharacter;
