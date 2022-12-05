const dBPG = require('../pikabu_db/DBPG');

class modelUsersInfo {
    async getUsersInfo(id) {
        try {
            const result = await dBPG
                .getConnections()
                .query(`SELECT * FROM users WHERE id = ${id}`);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }

    async createUsersInfo(nickname, post_user) {
        try {
            const result = await dBPG
                .getConnections()
                .query(`insert into users(nickname, post_user) values ('${nickname}', '${post_user}') returning *;`);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }

    async updateUsersInfo(id, nickname, post_user) {
        try {
            const result = await dBPG
                .getConnections()
                .query(`update users set nickname = '${nickname}', post_user = '${post_user}' where id = ${id}`);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
    
    async deleteUsersInfo(id) {
        try {
            const result = await dBPG
                .getConnections()
                .query(`delete from users where id = ${id}`);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new modelUsersInfo();