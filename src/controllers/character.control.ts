import { Request, Response } from "express";
import CharacterConst from "../models/character.model";

export const getCharacters = async (req: Request, res: Response) => {
    const charactersList = await CharacterConst.findAll()

    res.json(charactersList)
}

export const getCharacter = async (req: Request, res: Response) => {
    const {id } = req.params;   
    const character = await CharacterConst.findByPk(id);
    if (character) {
        res.json(character)
    } else {
        res.status(404).json({
            mensaje: `Can't find the character`
        })
    }
}

export const deleteCharacter = async (req: Request, res: Response) => {
    const {id } = req.params;   
    const character = await CharacterConst.findByPk(id);
    if (!character) {
        res.status(404).json({
            mensaje: `Can't delete the character`
        })
    } else {
        await character.destroy();
        res.json({
            mensaje: 'Successfully deleted!',
            id
        })
    }   
}

export const postCharacter = async (req: Request, res: Response) => {
    const {body} = req;
    const character = await CharacterConst.create(body);
    try {
        if (character) {
            res.json({
                mensaje: 'Successfully posted',
            })
        } else {
            res.status(404).json({
                mensaje: `Can't post the character`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            mensaje: 'You`re having troubles, comuicate with @jeiry300@gmail.com'
        })
    }
}

export const putCharacter = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    const character = await CharacterConst.findByPk(id);
    try {
        if (character) {
            await character.update(body);
            res.json({
                mensaje: `Successfully updated`
            })
        } else {
            res.status(404).json({
                mensaje: `Couldn't find the character `
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            mensaje: 'You`re having troubles, comuicate with @jeiry300@gmail.com'
        })
    }
    
}