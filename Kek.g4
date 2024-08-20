grammar Kek;

options {
	language = TypeScript;
}

prog: statement+ EOF;

statement:
	varDeclaration
	| varAssignment
	| ifStatement
	| whileStatement
	| functionDeclaration
	| returnStatement
	| expr;

varDeclaration: 'var' ID ('=' expr)?;
varAssignment: ID '=' expr;

ifStatement:
	'if' '(' expr ')' block ('else' (ifStatement | block))?;
whileStatement: 'while' '(' expr ')' block;

functionDeclaration:
	'function' ID '(' (ID (',' ID)*)? ')' block;
functionCall: ID '(' (expr (',' expr)*)? ')';

block: '{' statement+ '}';

comparisonOperator: '==' | '!=' | '<' | '>' | '<=' | '>=';
returnStatement: 'return' expr?;

expr:
	expr ('*' | '/') expr
	| expr ('+' | '-') expr
	| expr comparisonOperator expr
	| '(' expr ')'
	| functionCall
	| FLOAT
	| ID;

ID: [a-zA-Z_][a-zA-Z0-9_]*;
FLOAT: [0-9]+ ('.' [0-9]+)?;
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;