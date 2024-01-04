import { NextFunction, Request, Response } from "express";

export interface IObj {
  [key: string]: any;
}

export interface IReq extends Request {}

export interface IRes extends Response {}

export interface INext extends NextFunction {}
