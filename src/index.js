import "./styles.css";
import {projects, createProject} from "./projects.js" 
import DisplayManager from "./display.js";
import { initializeDom } from "./dom.js";

DisplayManager.displayProjects(projects);

initializeDom(projects);