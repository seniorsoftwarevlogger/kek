// Generated from Lol.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./LolParser.js";
import { VarDeclarationContext } from "./LolParser.js";
import { VarAssignmentContext } from "./LolParser.js";
import { ExprContext } from "./LolParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LolParser`.
 */
export default class LolListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LolParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.varAssignment`.
	 * @param ctx the parse tree
	 */
	enterVarAssignment?: (ctx: VarAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.varAssignment`.
	 * @param ctx the parse tree
	 */
	exitVarAssignment?: (ctx: VarAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `LolParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `LolParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

