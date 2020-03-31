import connection from '../database/connection';

export default {
  async index(req, res) {
    // eslint-disable-next-line camelcase
    const ong_id = req.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  },
};
