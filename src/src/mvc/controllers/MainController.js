import { MainView } from '../../mvc/views/MainView.js';
import { TaskData } from '../../mvc/models/TaskData.js';

export class MainController {
	process() {
		const view = new MainView();
		view.render();

		const model = new TaskData();
		model.fetchData();
	}
}
