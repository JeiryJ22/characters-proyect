import Router from "express";
import { getCharacter, getCharacters, deleteCharacter, postCharacter, putCharacter} from "../controllers/character.control";

const router = Router();

//endpoints
router.get('/', getCharacters);
router.get('/:id', getCharacter);
router.delete('/:id', deleteCharacter);
router.post('/', postCharacter);
router.put('/:id', putCharacter);

export default router;