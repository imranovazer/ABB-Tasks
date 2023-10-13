import { Request, Response } from "express";

import { myDataSource } from "../app-data-source.ts";
import { NewsPost } from "../entities/NewsPost.ts";
const NewsController = {
  getById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const results = await myDataSource
        .getRepository(NewsPost)
        .findOneBy({ id: Number(id) });
      if (results) {
        return res.status(200).json({
          status: "sucess",
          data: results,
        });
      } else {
        return res.status(404).json({
          status: "fail",
          message: "New with that id not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  },

  getNews: async (req: Request, res: Response) => {
    try {
      const newPosts = await myDataSource.getRepository(NewsPost).find();

      res.status(200).json({
        status: "sucess",
        data: newPosts,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  },

  createNew: async (req: Request, res: Response) => {
    try {
      const newPost = await myDataSource
        .getRepository(NewsPost)
        .create(req.body);
      const results = await myDataSource.getRepository(NewsPost).save(newPost);

      return res.status(201).json({
        status: "sucess",
        data: results,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  },
  editNew: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const newPost = await myDataSource.getRepository(NewsPost).findOneBy({
        id: Number(id),
      });

      if (newPost) {
        myDataSource.getRepository(NewsPost).merge(newPost, req.body);
        const results = await myDataSource
          .getRepository(NewsPost)
          .save(newPost);
        res.status(200).json({
          status: "sucess",
          data: results,
        });
      } else {
        return res.status(404).json({
          status: "fail",
          message: "New with that id not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  },
  deleteNew: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const results = await myDataSource.getRepository(NewsPost).delete(id);

      if (results.affected > 0) {
        res.status(200).json({
          status: "success",
          data: "New deleted successfully",
        });
      } else {
        return res.status(404).json({
          status: "fail",
          message: "New with that id not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  },
};

export default NewsController;
