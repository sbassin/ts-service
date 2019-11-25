import { Repository } from "../models/Repository";

export interface RepositoryService {
     getRepositories() : Repository[];
}
