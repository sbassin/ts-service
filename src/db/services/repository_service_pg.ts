import { RepositoryService } from "./repository_service"
import { Repository } from "../models/repository";

export class RepositoryServicePg implements RepositoryService {
    getRepositories(): Repository[] {
        return [new Repository("FizzBuzz")];
    }
}
