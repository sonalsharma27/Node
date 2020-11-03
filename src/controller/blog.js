const { sequelize } = require("../db/index");
const passport = require('passport');

function Init(app) {
  // app.get("/blog", async function (request, response) {
  //   const blogs = await sequelize.models.blogs.findAll({});
  //   response.status(200).send(blogs);
  // });

  // app.get("/blog/:id", async function (request, response) {
  //   const { id } = request.params;
  //   const blog = await sequelize.models.blogs.findOne({ id });
  //   response.send({ blog });
  // });

  app.delete("/blog/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({ id });
    const dest = await blog.destroy();
    response.send({ dest });
  });
  
  app.get(
    "/blog",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { body } = request;
      const { name, content, rating } = body;

      const createdblog = await sequelize.models.blogs.findAll({
        blog_name: name,
        content,
        rating,
      });
      response.status(201).send(createdblog);
    }
  );

  app.post(
    "/blog",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { body } = request;
      const { name, content, rating } = body;

      const createdblog = await sequelize.models.blogs.create({
        blog_name: name,
        content,
        rating,
      });
      response.status(201).send(createdblog);
    }
  );

  app.put("/blog/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await sequelize.models.blogs.findOne({ id });

    const { body } = request;
    const { name, content, quality, rating } = body;

    blog.blog_name = name ? name : blog.name;
    blog.content = content ? content : blog.content;
    blog.rating = rating ? rating : blog.rating;

    await blog.save();

    response.status(200).send(blog);
  });
}

module.exports = {
  Init,
};
