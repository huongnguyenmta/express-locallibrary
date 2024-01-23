import createError from 'http-errors'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import helmet from 'helmet'
import express, { NextFunction, Request, Response } from 'express'

const app = express()

app.use(logger('dev'))
// app.use(express.json())
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../src/public')))

// view engine setup
app.set('views', path.join(__dirname, '../src/views'))
app.set('view engine', 'pug')

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404))
// })

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(500) // err.status
  res.render('error')
})

export default app
