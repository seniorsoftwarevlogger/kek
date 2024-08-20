// Generated from Kek.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./KekParser.js";
import { StatementContext } from "./KekParser.js";
import { VarDeclarationContext } from "./KekParser.js";
import { VarAssignmentContext } from "./KekParser.js";
import { IfStatementContext } from "./KekParser.js";
import { WhileStatementContext } from "./KekParser.js";
import { FunctionDeclarationContext } from "./KekParser.js";
import { FunctionCallContext } from "./KekParser.js";
import { BlockContext } from "./KekParser.js";
import { ComparisonOperatorContext } from "./KekParser.js";
import { ReturnStatementContext } from "./KekParser.js";
import { ExprContext } from "./KekParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `KekParser`.
 */
export default class KekListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `KekParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.varAssignment`.
	 * @param ctx the parse tree
	 */
	enterVarAssignment?: (ctx: VarAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.varAssignment`.
	 * @param ctx the parse tree
	 */
	exitVarAssignment?: (ctx: VarAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `KekParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `KekParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

