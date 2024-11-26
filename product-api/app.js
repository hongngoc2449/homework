const express = require('express');																	
const mongoose = require('mongoose');																	
const cors = require('cors');																	
const bodyParser = require('body-parser');																	
const productRoutes = require('./routes/productRoutes');																	
const path = require('path');																	
																	
const app = express();																	
app.use(cors());																	
app.use(bodyParser.json());																	
app.use('/uploads', express.static('uploads')); // Để phục vụ hình ảnh																	
app.use('/api/products', productRoutes);																	
																	
// Serve static files from the 'views' directory
app.use('/views', express.static(path.join(__dirname, 'views')));

// Kết nối đến MongoDB																	
mongoose.connect('mongodb://localhost:27017/productdb', { useNewUrlParser: true, useUnifiedTopology: true })																	
.then(() => console.log('MongoDB Connected'))																	
.catch(err => console.error(err));																	
																	
// Thiết lập port																	
const PORT = process.env.PORT || 5000;																	
app.listen(PORT, () => {																	
console.log(`Server is running on http://localhost:${PORT}`);																	
});