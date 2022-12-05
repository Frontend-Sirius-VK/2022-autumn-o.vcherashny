const dBPG = require('../pikabu_db/DBPG');

class modelPostPikabu {
    async getPostPikabu(id) {
        try {
            const result = await dBPG
                .getConnections()
                .query(`SELECT * FROM post_pikabu WHERE id = ${id}`);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }

    async createPostPikabu(title, author, text_post) {
        try {
            const result = await dBPG
                .getConnections()
                .query(`insert into post_pikabu(title, author, text_post) values ('${title}', '${author}', '${text_post}') returning *;`);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }

    async updatePostPikabu(id, title, author, text_post) {
        try {
            const result = await dBPG
                .getConnections()
                .query(`update post_pikabu set title = '${title}', author = '${author}', text_post = '${text_post}' where id = ${id}`);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
    
    async deletePostPikabu(id) {
        try {
            const result = await dBPG
                .getConnections()
                .query(`delete from post_pikabu where id = ${id}`);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new modelPostPikabu();