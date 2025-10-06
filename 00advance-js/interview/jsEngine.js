// A Just-In-Time (JIT) compiler is a feature of modern JavaScript engines that improves performance by compiling code into machine code during execution, combining the best features of both interpreters and compilers.

// In simple terms, instead of slowly interpreting code line-by-line every time, the JIT compiler identifies "hot" code—parts of your code that are run frequently—and compiles them into fast, optimized machine code that the computer's processor can run directly.

// How It Works: Interpreter vs. JIT Compiler
// To understand a JIT compiler, it helps to know the two traditional approaches:

// Interpreter: Reads code line by line, translates it, and runs it immediately. It's fast to start but slow overall, especially with loops, because it re-translates the same code every time.

// Compiler: Reads all the code upfront, translates it into a complete machine-code program, and then runs that program. It's slow to start but runs very fast afterward.

// A JIT compiler offers a hybrid approach for maximum speed. 🚀

// Here's the typical process in a JavaScript engine like V8 (used in Chrome and Node.js):

// Parsing: The engine first parses the JavaScript code into an abstract representation (an Abstract Syntax Tree).

// Initial Compilation: It then compiles this tree into an intermediate format called bytecode, not machine code.

// Interpretation: An interpreter starts running the bytecode. This allows the code to start executing quickly.

// Profiling: While the interpreter runs, a profiler (or monitor) watches the code, identifying which functions or loops are executed frequently ("hot spots").

// Optimization: When a piece of code gets "hot," the JIT compiler takes it, makes optimizations based on the profiling data, and compiles it into highly efficient machine code.

// Swapping: The engine then swaps the slow bytecode version of the function with the newly optimized machine-code version. If the assumptions made during optimization turn out to be wrong later, it de-optimizes and reverts back to the bytecode
