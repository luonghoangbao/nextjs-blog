import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: 'Hello user'})
//     const email = req.body.email
//   // Then save email to your database, etc...
}