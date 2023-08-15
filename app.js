import  express from "express";
import morgan from "morgan";

const app = express();
const PORT = 8000;


app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World')
});
app.get('/users', (req, res) => {
    res.json({
        user: 'Silvana A'
    });
})

app.listen(PORT, () => console.log('Server running on port: ' + PORT));