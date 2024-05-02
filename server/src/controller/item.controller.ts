import { AppDataSource } from "../data-source";
import { Item } from "../entity/Item";
import { Controller } from "./base.controller";

export class ItemController extends Controller {
    repository = AppDataSource.getRepository(Item);
}