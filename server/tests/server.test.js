const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo').models.Todo;



beforeEach((done) => {
    Todo.remove({}).then(()=>done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
         .post('/todos')
         .send({text})
         .expect(200)
         .expect( (res) => {
             expect(res.body.text).toBe(text);
         })
         .end((err, res) => {
             if(err)
             return done(err);
         });
         
         Todo.find().then((todos)=> {
             expect(todos.length).toBe(1);
             expect(todos[0].text).toBe(text);
             done();
         }).catch((e)=>done(e));
         
        }); 
    });


describe('DELETE /todos/:id', () => {

    it('should remove a todo', (done) => {
       var hexId = todos[1]._id.toHexString();

       request(app)
        .delete(`/todos/${hexId}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo._id).toBe(hexId);
        })
        .end((err, res) => {
            if(err)
            return done();

         Todo.findById(hexId).then( (todo) => {
             expect(todo).toNotExist();
             done();
         }).catch( (e)=> done());
        });


    });

    it('should return 404 if todo is not found', (done) => {

    });

    it('should return 404 if id is invalid', (done) => {

    });
})