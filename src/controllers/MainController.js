import {MainView} from '../views/MainView.js';
import {Person} from '../models/Person.js';

export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const person = new Person();
        person.fetchData().then(({position}) => {
            view.columnRight.update({
                displayName: person.getDisplayName(),
                position,
            });
        });

        const skills = new SkillCollection();
        skills.fetchSkills().then(() => {
            const data = skills.getList();
            view.columnRight.updateSkills(data);
        });
    }
}
