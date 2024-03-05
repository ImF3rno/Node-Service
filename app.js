const express=require('express');
const app=express();
app.use(express.json())
const serviceRoutes=require('./routes/serviceRoutes')
const userRoutes=require('./routes/userRoutes')
const foremanRoutes=require('./routes/foremanRoutes')
const morgan=require('morgan')

app.use(morgan('dev'));

// ==================================================================== //
// Mounting router
app.use('/api/v1/services',serviceRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/foreman',foremanRoutes)
// ==================================================================== //

module.exports=app;