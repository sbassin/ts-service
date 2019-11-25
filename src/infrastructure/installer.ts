import "reflect-metadata";
import { Container } from "inversify";

import SERVICE_IDENTIFIER from "./identifiers";
import { RepositoryService } from "../db/services/repository_service";
import { RepositoryServicePg } from "../db/services/repository_service_pg";

let container = new Container();
container.bind<RepositoryService>(SERVICE_IDENTIFIER.RepositoryService).to(RepositoryServicePg);

export default container;

