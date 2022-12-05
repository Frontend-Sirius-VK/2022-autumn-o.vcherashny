import {Summary} from '../summary/summary.js';
import {Info} from '../info/info.js';
import {Skills} from '../skills/skills.js';
import {Contacts} from '../contacts/contacts.js';

const infoJobData = [{
    title: 'Руководитель группы разработки',
    explanation: 'Компания "VK", 1900 г. — н.в.',
    bullets: [
        'Преподавать Frontend',
        'Двигать кнопки',
        'Делать красиво',
        'Ходить с важным видом'
    ]
}, {
    title: 'Frontend-разработчик',
    explanation: 'Компания "Сам по себе", 1800 г. — 1900 г.',
    bullets: [
        'Двигать кнопки',
        'Ходить с важным видом',
        'Преподавать Frontend',
        'Делать красиво'
    ]
}];

const infoEduData = [{
    title: 'МГТУ им. Н.Э. Баумана',
    explanation: 'Магистратура, 1900 г. Диплом по тематике аналитических систем для бизнес-интеллидженс.',
}];

const skillsData = [
    'Преподавать Frontend',
    'Руководить группой разработки',
    'Есть печенье с молоком',
    'Рассказывать несмешные анекдоты',
    'Спрашивать у группы, успевает ли она',
];

const contactsData = [{
    href: 'https://t.me/StealthTech',
    text: 'Telegram',
}]

export class ColumnRight {
    constructor(parent) {
        this.parent = parent;
        this.summary = null;
        this.skills = null;
    }

    render(container) {
        this.summary = new Summary(container);
        this.summary.render('Юзернейм Юзернеймов', 'Программист Frontend');

        const contacts = new Contacts(container);
        contacts.render(contactsData);

        this.skills = new Skills(container);
        this.skills.render('Основные умения', skillsData);

        const infoJob = new Info(container);
        infoJob.render('Опыт работы', infoJobData);

        const infoEdu = new Info(container);
        infoEdu.render('Образование', infoEduData);
    }

    update(data = {}) {
        if (!data || !Object.keys(data).length) {
            return;
        }

        this.summary.update(data.displayName, data.position);
    }

    updateSkills(data = []) {
        if (!data?.length) {
            return;
        }

        this.skills.update(data);
    }
}
