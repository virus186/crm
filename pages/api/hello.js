// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const connectDB = require('../../utils/connectDB')

connectDB()

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
