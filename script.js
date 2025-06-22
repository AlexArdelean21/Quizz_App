// Comprehensive EV and GA Question Database
const questionDatabase = [
 {
  category: "Genetic Algorithms",
  question: "Recombination in ES may be",
  options: [
    "global",
    "discrete",
    "All the answers are correct",
    "intermediary",
    "local"
  ],
  answer: "All the answers are correct",
  explanation: "In Evolution Strategies (ES), recombination can occur in different forms such as global, discrete, intermediary, and local, depending on how parents contribute to offspring generation."
},
{
  category: "Genetic Algorithms",
  question: "Consider the following permutation chromosomes:\n{ 6, 3, 7, 8, 5, 1, 2, 4, 9 } and { 7, 2, 8, 5, 6, 9, 4, 1, 3 }. By applying the PMX operator with positions 3 and 6, the created descendants are:",
  options: [
    "a. 6, 3, 7, 8, 5, 9, 4, 1, 2",
    "b. 7, 4, 6, 8, 5, 1, 2, 9, 3",
    "c. 6, 3, 7, 5, 5, 6, 9, 4, 1",
    "d. 6, 3, 7, 8, 5, 9, 4, 1, 3",
    "e. 6, 2, 7, 8, 5, 9, 4, 1, 3",
    "f. 7, 9, 8, 6, 5, 1, 2, 4, 3",
    "g. 7, 9, 8, 6, 5, 1, 2, 4, 3",
    "h. 7, 3, 8, 5, 6, 1, 2, 4, 9",
    "i. 5, 3, 7, 8, 6, 9, 4, 1, 2",
    "j. 7, 3, 8, 5, 6, 9, 2, 4, 1"
  ],
  answer: "g, j",
  explanation: "PMX (Partially Mapped Crossover) maps elements between two cut points and swaps others accordingly. The correct offspring resulting from positions 3 to 6 produce the sequences listed as options g and j."
},
{
  category: "Genetic Algorithms",
  question: "The effect of size k tournament selection is:\n1. Selection of the best k individuals from the input multiset;\n2. Random selection of k individuals from the input multiset;\n3. Selection of the best individual from k randomly considered individuals from the input multiset;\n4. Selection of a random individual;\n5. Induces a selection pressure proportional to k.",
  options: [
    "1, 5",
    "2, 5",
    "4, 5",
    "3, 5",
    "none of the other answers is correct"
  ],
  answer: "3, 5",
  explanation: "In tournament selection, k individuals are randomly selected and the best one is chosen. This process induces a selection pressure proportional to k, making '3' and '5' correct."
},
{
  category: "Genetic Algorithms",
  question: "Consider x = [6 1 8 10 5 7 12 43 9 3 4 2] a sequence of integers. By applying the creep mutation with a limit of 1, the following descendant may be obtained:\n1. Y = [16 1 8 10 5 7 12 43 9 3 4 2]\n2. Y = [6 1 8 10 5 7 12 43 9 3 4 2]\n3. Y = [6 1 8 10 15 7 12 43 9 3 4 2]\n4. Y = [7 1 8 10 5 7 12 43 9 3 4 2]\n5. Y = [6 1 8 10 5 7 12 43 9 3 4 2]\n6. Y = [6 1 8 10 5 7 12 42 9 3 4 2]",
  options: [
    "1, 2, 3, 4, 5, 6",
    "2, 3, 4, 5, 6",
    "2, 4, 5, 6",
    "4, 5, 6",
    "2, 4, 6"
  ],
  answer: "2, 4, 6",
  explanation: "Creep mutation alters genes by a small increment (e.g., ±1). Therefore, values like 16 or 15 are outside the limit and invalid. Only options 2 (unchanged), 4 (6→7), and 6 (43→42) are valid."
},
{
  category: "Evolutionary Computation",
  question: "The evolutionary computation is",
  options: [
    "similar to sorting algorithms",
    "a concept that contradicts the theory of evolution",
    "None of the other answers is correct",
    "similar to direct search methods",
    "a concept that confirms the theory of relativity"
  ],
  answer: "similar to direct search methods",
  explanation: "Evolutionary computation is based on iterative optimization inspired by natural evolution, and it belongs to the family of direct search methods where no gradient is required."
},
{
  category: "Evolutionary Computation",
  question: "The role of the fitness function in an evolutionary algorithm is",
  options: [
    "to end the search for the optimal solution",
    "to measure each candidate's level of adaptation to the environment",
    "None of the other answers is correct",
    "to choose a candidate for recombination",
    "to choose a candidate for mutation"
  ],
  answer: "to measure each candidate's level of adaptation to the environment",
  explanation: "The fitness function evaluates how well each candidate solution performs with respect to the objective, guiding selection, recombination, and mutation."
},
{
  category: "Evolutionary Strategies",
  question: "In a general evolutionary strategy (based on populations)",
  options: [
    "the target function is defined on permutations",
    "the target function is defined on real values",
    "the target function is defined on a discrete set",
    "the target function is defined on integers",
    "the target function is defined on bits"
  ],
  answer: "the target function is defined on real values",
  explanation: "In general evolutionary strategies (like (μ, λ)-ES), solutions are typically represented as real-valued vectors, and thus the target function operates on real values."
},
{
  category: "Genetic Algorithms",
  question: "Consider the permutation\np = (11, 12, 8, 3, 5, 4, 9, 2, 1, 7, 10, 6)\nand the result of inversion mutation\nq = (11, 12, 8, 3, 10, 7, 1, 2, 9, 4, 5, 6).\nThe positions used for mutation are:",
  options: [
    "(5, 10)",
    "(5, 11)",
    "(2, 6)",
    "(2, 11)",
    "(4, 11)"
  ],
  answer: "(5, 11)",
  explanation: "In inversion mutation, a subsequence is reversed. From position 5 (value 4) to 11 (value 5), the reversed subsequence yields the transformation seen in q."
},
{
  category: "Genetic Algorithms & Evolutionary Strategies",
  question: "Choose the correct statements:\n1. In an evolutionary strategy based on populations, the number of descendants is higher than the number of parents.\n2. In an evolutionary strategy based on populations, the number of descendants is lower than the number of parents.\n3. In a genetic algorithm, the population usually has a constant size.\n4. The recombination in a genetic algorithm depends on the fitness function.\n5. The maximum number of iterations in a genetic algorithm depends on the representation of chromosomes.",
  options: [
    "2, 5",
    "1, 3",
    "2, 3",
    "1, 5",
    "2, 4"
  ],
  answer: "1, 3",
  explanation: "In evolutionary strategies, it is common for the number of descendants to exceed the number of parents, while genetic algorithms typically maintain a constant population size across generations. The other statements are not universally true."
},
{
  category: "Optimization Theory",
  question: "Consider S the solution space for a problem that maximizes a function f. Choose the correct statement:",
  options: [
    "None of the other answers is correct",
    "S does not depend on the domain of f",
    "S and f are identical",
    "S is always a finite set",
    "maximum value of f is not reached for any element from S"
  ],
  answer: "None of the other answers is correct",
  explanation: "The solution space S is usually a subset of the domain of f, not independent or identical to it. It is not necessarily finite, and the maximum can be reached, so all other options are incorrect."
},
{
  category: "Genetic Algorithms",
  question: "In a generic algorithm, the mutation operation:\n1. does not use random factors;\n2. operates on one gene or one individual;\n3. is applied on the current population;\n4. may produce non-viable individuals;\n5. always produces viable results;\n6. is used only in no constraint problems;\n7. is used only in constraint problems;\n8. is applied right before each selection of the next generation;\n9. is applied on the parents multiset;\n10. has a low probability;\n11. is applied once, after the initial population is generated;\n12. is applied on all descendants created by the recombination step.",
  options: [
    "3, 4, 6, 11, 12",
    "3, 4, 7, 8, 11",
    "3, 6, 11, 12",
    "5, 7, 8, 10, 12",
    "2, 4, 8, 10, 12"
  ],
  answer: "2, 4, 8, 10, 12",
  explanation: "Not sure about the exact context, but generally, mutation is applied to individual genes or individuals, can produce non-viable offspring, is applied before selection, and has a low probability of occurrence. It is not limited to no-constraint problems."
},
{
  category: "Genetic Algorithms",
  question: "A genetic algorithm that minimizes a function f:",
  options: [
    "None of the other answers is correct",
    "usually transforms f to obtain a maximization problem",
    "uses the first elements in the domain of f, in descending order of their f values",
    "always uses the permutation representation for the elements in the domain of f",
    "uses the first elements in the domain of f, in ascending order of their f values"
  ],
  answer: "usually transforms f to obtain a maximization problem",
  explanation: "Most genetic algorithms are structured for maximization; minimizing a function is typically done by transforming f into -f or using reciprocal fitness values."
},
{
  category: "Evolutionary Computation",
  question: "The evolutionary computation is inspired by:",
  options: [
    "the knowledge society",
    "the informational society",
    "the structural revolution",
    "the natural biological evolution",
    "the industrial revolution"
  ],
  answer: "the natural biological evolution",
  explanation: "Evolutionary computation mimics the process of natural selection and biological evolution, using mechanisms like mutation, recombination, and selection."
},
{
  category: "Genetic Algorithms",
  question: "If f is a function that must be maximized, f has positive values and is defined on a continuous space, then in order to optimize f with a genetic algorithm that may use FPS selection, the algorithm fitness function is:",
  options: [
    "f",
    "1/(1+f)",
    "1-f",
    "1/f",
    "-f"
  ],
  answer: "f",
  explanation: "No transformation or inversion is needed (unlike in minimization problems) when using fitness proportionate selection (FPS) for maximization. The fitness function can directly use f as it is."
},
{
  category: "Genetic Algorithms",
  question: "In genetic algorithms, the permutation representation",
  options: [
    "None of the other answers is correct",
    "does not allow the use of mutation operators",
    "does not allow the use of recombination operators",
    "does not allow more than 2 genes with the same value in a chromosome",
    "is fixed-width"
  ],
  answer: "is fixed-width",
  explanation: "It is fixed-width, meaning the number of genes (positions in the chromosome) is constant and equal to the number of elements to permute."
},
{
  category: "Memetic Algorithms",
  question: "The purpose of a memetic algorithm is:\n1. to use random factors;\n2. to improve the information from one generation to the next;\n3. to introduce the self-adaptation process;\n4. to improve the information in the current generation through use of a local search algorithm;\n5. to ensure the perpetuation of the maximum quality individual from the current population;\n6. to increase the quality of the current population;\n7. to separately process each iteration;\n8. to use heuristics.",
  options: [
    "2, 3, 4, 5, 6",
    "2, 4",
    "2, 4, 6",
    "4, 8",
    "2, 4, 7, 8"
  ],
  answer: "2, 3, 4, 5, 6",
  explanation: "Memetic algorithms combine global evolutionary search with local refinement techniques to improve solution quality, especially by preserving and enhancing the best individuals across generations using local search and self-adaptation."
},
{
  category: "Genetic Algorithms",
  question: "Consider a maximization problem where the target function has real values, knowing that there is at least one strictly negative value and at least one strictly positive value among the fitness values of the population members. A genetic algorithm that solves this problem",
  options: [
    "may use a roulette selection based on standard FPS distribution.",
    "can not use the tournament selection.",
    "can not use the standard FPS selection probability.",
    "may use a SUS selection based on standard FPS distribution.",
    "can not use any selection mechanism."
  ],
  answer: "can not use the standard FPS selection probability.",
  explanation: "Stochastic Universal Sampling (SUS) can still be used with FPS even when negative values exist, as long as the fitness values are normalized or shifted to be strictly positive."
},
{
  category: "Evolutionary Algorithms",
  question: "In an evolutionary algorithm, a better individual",
  options: [
    "None of the other answers is correct.",
    "always generates a descendant.",
    "may be found in a single population.",
    "is always promoted to the final population.",
    "may be found in multiple generations and may produce multiple descendants."
  ],
  answer: "may be found in multiple generations and may produce multiple descendants.",
  explanation: "Superior individuals are often retained through elitism or selection pressure and can appear in multiple generations, influencing the population by producing several offspring."
},
{
  category: "Genetic Algorithms",
  question: "In a genetic algorithm, the recombination operation:\n1. happens only once;\n2. happens immediately after each parent selection operation;\n3. uses a recombination probability whose value usually does not matter;\n4. happens right before each mutation operation;\n5. happens right before each parent selection operation;\n6. uses the initial population;\n7. is used only in no-constraint problems;\n8. is applied with high probability;\n9. is applied with low probability;\n10. happens only once, after the first parent selection operation.",
  options: [
    "1, 2, 7, 8",
    "2, 4, 6, 8",
    "2, 4, 8",
    "4, 8, 9, 10",
    "2, 3, 4, 7"
  ],
  answer: "2, 4, 8",
  explanation: "In typical GAs, recombination happens after parent selection, is applied with high probability, may use the initial population, and is typically followed by mutation."
},
{
  category: "Problem Modeling & Representation",
  question: "Consider the following problem: compute a subset of the set A={a₁, a₂, ..., aₙ}, where the sum of subset elements is at least half the sum of all elements in set A. The genotype solution space for this problem is:",
  options: [
    "the set of vectors of size n, with elements from set A.",
    "the set of binary vectors of size n.",
    "the set of vectors of size n with positive elements.",
    "infinite",
    "the set of permutations of set A."
  ],
  answer: "the set of binary vectors of size n.",
  explanation: "Each binary vector indicates inclusion (1) or exclusion (0) of an element in the subset, making this a classic binary representation problem."
},
{
  category: "Evolutionary Strategies",
  question: "In an evolutionary strategy class algorithm, the recombination operation:\n1. in average, selects half of the individuals for recombination;\n2. is used only in problems with constraints;\n3. uses the current population;\n4. happens only once during the algorithm;\n5. has a low probability;\n6. creates a descendants multiset that is usually much larger than the current population;\n7. happens only once, after the first population is generated;\n8. is universal;\n9. influences the chromosome structure.",
  options: [
    "4, 6, 7",
    "2, 4, 6",
    "2, 4, 5, 6",
    "3, 6",
    "1, 8, 9"
  ],
  answer: "3, 6",
  explanation: "In evolutionary strategies, recombination may happen once and can generate a large number of offspring. It's also commonly used after the first population is initialized."
},
{
  category: "Genetic Algorithms",
  question: "In genetic algorithms, the binary representation",
  options: [
    "is not used.",
    "None of the other answers is correct.",
    "is the most commonly used.",
    "does not depend on the problem being solved.",
    "always leads to optimal results."
  ],
  answer: "is the most commonly used.",
  explanation: "Binary representation is one of the most common ways to encode candidate solutions in genetic algorithms, especially for problems with discrete or combinatorial solution spaces."
},
{
  category: "Genetic Algorithms",
  question: "Which values must be avoided for the weight in arithmetic recombination operators used in genetic algorithms?\n1) 0;\n2) 0.25;\n3) 0.5;\n4) 0.75;\n5) 1;\n6) none;\n7) multiples of 2;\n8) negative values;\n9) 1.5;\n10) 2.",
  options: [
    "8, 9, 10",
    "2, 3, 4",
    "1, 3, 5",
    "6",
    "7"
  ],
  answer: "8, 9, 10",
  explanation: "In arithmetic recombination, weights must typically be in the [0, 1] range to maintain valid interpolations between parents. Negative values and values greater than 1 (like 1.5 or 2) can lead to extrapolation or invalid offspring."
},
{
  category: "Evolution Strategies (ES)",
  question: "The self-adaptation mechanism implemented by ES class algorithms:\n1. refers to the population size;\n2. refers to mutation step size(s);\n3. seeks to direct the search in the area(s) with global optimum points;\n4. refines the search in the solution space to reach a better approximation of an optimum point;\n5. refines the search in the solution space to reach as many as possible optimum points.",
  options: [
    "1, 3",
    "1, 3, 4",
    "1, 5",
    "1, 4, 5",
    "2, 3, 4"
  ],
  answer: "2, 3, 4",
  explanation: "In ES algorithms, self-adaptation mainly refers to mutation step sizes and mechanisms to guide the search toward global optima and refine the search space for better solutions."
},
{
  category: "Genetic Algorithms",
  question: "In a genetic algorithm, the initial population:\n1. is not always necessary;\n2. must include a large genetic diversity;\n3. ideally contains identical individuals;\n4. has a size proportional with the number of the current generation;\n5. is static, does not evolve;\n6. is constructed using the greedy method;\n7. must have a size as big as possible.",
  options: [
    "2",
    "1, 2, 4",
    "2, 5, 7",
    "6",
    "1"
  ],
  answer: "2",
  explanation: "A diverse initial population helps avoid premature convergence. While not strictly necessary in all algorithm variants, it is common."
},
{
  category: "Evolutionary Computation",
  question: "The evolutionary computation is inspired by:",
  options: [
    "the industrial revolution",
    "the informational society",
    "the knowledge society",
    "the natural biological evolution",
    "the new agricultural revolution"
  ],
  answer: "the natural biological evolution",
  explanation: "Evolutionary computation mimics the process of natural selection and biological evolution, using mechanisms like mutation, recombination, and selection."
},
{
  category: "Memetic Algorithms",
  question: "Which of the following methods may be used in memetic algorithms to improve the information within a population?\n1. recursivity\n2. hillclimbing\n3. divide et impera\n4. 2MASS\n5. backtracking\n6. exact methods\n7. heuristic methods\n8. the gradient method\n9. data validation\n10. ECX",
  options: [
    "1, 3, 5, 7, 8",
    "2, 3, 5, 6, 9",
    "0, 2, 4, 6, 8",
    "2, 4, 6, 7, 8",
    "2, 4, 6, 7, 9"
  ],
  answer: "2, 4, 6, 7, 8",
  explanation: "Memetic algorithms combine evolutionary strategies with local search techniques. Hill climbing, local heuristics, and methods like 2MASS or data validation are often integrated to refine individual solutions."
},
{
  category: "Evolutionary Algorithms",
  question: "In an evolutionary algorithm, the stop condition may include the following elements:\n1. control of the number of iterations (maximum number of generated populations);\n2. availability of memory space;\n3. reaching the optimum value of the target function;\n4. verification of the genetic diversity of the population;\n5. decrease of population size below a given threshold;\n6. increase of chromosome length.",
  options: [
    "1, 2, 5",
    "1, 3, 4",
    "1, 5, 6",
    "2, 4, 5",
    "2, 3, 4"
  ],
  answer: "1, 3, 4",
  explanation: "Typical stopping criteria in evolutionary algorithms include reaching a maximum number of iterations, achieving the optimum value, or detecting stagnation via low genetic diversity."
},
{
  category: "Genetic Algorithms",
  question: "Consider v = [0, 1, 1, 1, 1], an individual from the space of binary vectors of size 5. A mutation in a gene of v may produce a vector with:\n1. all elements ≥ 2\n2. all elements ∈ {0, 3}\n3. four elements ≠ 0\n4. four elements ≠ 1\n5. None of the other answers is correct.",
  options: [
    "1, 3",
    "3, 5",
    "1, 2, 4",
    "1, 2, 3, 4",
    "2, 3, 4"
  ],
  answer: "2, 3, 4",
  explanation: "A mutation typically flips a bit (0 ↔ 1), so results like all elements ≥ 2 are not possible. However, combinations involving 0 and 1 values—like having four values ≠ 0 or ≠ 1—are valid mutation outcomes."
},
{
  category: "Genetic Algorithms & Evolution Strategies",
  question: "Alegeți variantele corecte din următoarele:\n1. Într-o strategie evolutivă bazată pe populații, numărul copiilor este mai mare decât numărul părinților.\n2. Într-o strategie evolutivă bazată pe populații, numărul copiilor este mai mic decât numărul părinților.\n3. Într-un algoritm genetic, populația este în general de dimensiune constantă.\n4. Recombinația într-un algoritm genetic depinde de funcția fitness.\n5. Numărul maxim de iterații într-un algoritm genetic depinde de reprezentare.",
  options: [
    "1 și 5",
    "1 și 3",
    "2 și 3",
    "2 și 5",
    "2 și 4"
  ],
  answer: "1 și 3",
  explanation: "În strategiile evolutive (cum ar fi (μ + λ)-ES), este comun ca numărul de copii (λ) să fie mai mare decât numărul de părinți (μ). De asemenea, algoritmii genetici tind să mențină o populație de dimensiune constantă între generații."
},
{
  category: "Permutation Feasibility and Recombination",
  question: "Fie v = (4, 1, 2, 5, 7, 3, 6, 9, 10, 8) un cromozom. Spațiul de căutare este format din permutări de lungime 10 cu proprietatea că pentru orice p din spațiul soluțiilor există două valori consecutive (p[i], p[i+1]) cu p[i+1] = p[i] + 1. Atunci:",
  options: [
    "Niciuna din celelalte afirmații",
    "v poate intra într-o operație de recombinare PMX cu orice alt individ fezabil din spațiul soluțiilor producând întotdeauna noi indivizi fezabili",
    "v poate intra într-o operație de recombinare OCX cu orice alt individ fezabil din spațiul soluțiilor producând întotdeauna noi indivizi fezabili",
    "v nu este fezabil",
    "v este fezabil"
  ],
  answer: "v nu este fezabil",
  explanation: "Pentru ca o permutare să fie fezabilă în acest spațiu, trebuie să conțină cel puțin un cuplu de valori consecutive (i, i+1). În secvența dată, niciun astfel de cuplu consecutiv nu respectă această proprietate în mod evident, deci cromozomul nu este fezabil."
},
{
  category: "ES2M Algorithm",
  question: "Algoritmul ES2M:\nSelectați răspunsul corect:",
  options: [
    "Este bazat pe indivizi (construiește un șir de indivizi)",
    "Nici una din celelalte variante",
    "Este un algoritm determinist",
    "Nu este un algoritm evolutiv",
    "Nu este un algoritm auto-adaptiv"
  ],
  answer: "Este bazat pe indivizi (construiește un șir de indivizi)",
  explanation: "ES2M este un algoritm evolutiv auto-adaptiv care lucrează cu populații de indivizi și utilizează mutație și selecție pentru a optimiza. Așadar, este bazat pe indivizi și construiește populații în fiecare generație."
},
{
  category: "Evolutionary Algorithms - Termination Conditions",
  question: "În cadrul unui algoritm evolutiv, condiția de terminare poate include următoarele elemente:\na) controlul numărului de iterații (număr maxim admis de populații generate),\nb) disponibilitatea spațiului de memorie,\nc) atingerea valorii optime a funcției obiectiv,\nd) verificarea unei condiții legate de diversitatea genetică,\ne) scăderea dimensiunii populației sub o limită admisă,\nf) creșterea lungimii cromozomilor.\n\nSelectați răspunsul corect:",
  options: [
    "a, e, f",
    "a, c, d",
    "a, b, e",
    "b, c, d",
    "b, d, e"
  ],
  answer: "a, c, d",
  explanation: "Condițiile clasice de terminare a unui algoritm evolutiv includ: atingerea unui număr maxim de iterații (a), atingerea valorii optime a funcției obiectiv (c), și stagnarea diversității genetice (d)."
},
{
  category: "Selection Methods",
  question: "Selecția turneu cu 3 indivizi are ca efect:",
  options: [
    "a. alegerea unui individ părinte/membru al generației următoare; c. alegerea individului cel mai bun din 3 indivizi considerați aleator în multisetul pe care este aplicată; e. inducerea unei presiuni de selecție superioară celei uniforme.",
    "b. alegerea aleatoare a 3 indivizi din multisetul pe care este aplicată; e. inducerea unei presiuni de selecție superioară celei uniforme.",
    "c. alegerea individului cel mai bun din 3 indivizi considerați aleator în multisetul pe care este aplicată; e. inducerea unei presiuni de selecție superioară celei uniforme.",
    "d. alegerea unui individ la întâmplare; e. inducerea unei presiuni de selecție superioară celei uniforme.",
    "e. nici unul din celelalte răspunsuri"
  ],
  answer: "a. alegerea unui individ părinte/membru al generației următoare; c. alegerea individului cel mai bun din 3 indivizi considerați aleator în multisetul pe care este aplicată; e. inducerea unei presiuni de selecție superioară celei uniforme.",
  explanation: "Selecția turneu implică alegerea a 3 indivizi aleatori și selectarea celui mai bun dintre ei, ceea ce duce la o presiune de selecție mai mare decât selecția uniformă."
},
{
  "category": "Recombination in Evolution Strategies",
  "question": "Fie indivizii x=(0.1, 0.3; 0.001, 0.002) și y=(0.3, 0.2; 0.003, 0.001), membri ai populației curente într-o strategie evolutivă. Un cromozom este format din 4 elemente: primele 2 reprezintă partea soluție, următoarele 2 formează partea parametrică. Dacă x și y sunt aleși ca părinți într-o procedură de recombinare locală, atunci poate rezulta copilul:",
  "options": [
    "a. 2, 3 sau 4",
    "b. 3, 4 sau 5",
    "c. 1, 2 sau 3",
    "d. 1, 4 sau 5",
    "e. Oricare dintre cele 5 variante"
  ],
  "answer": "e. Oricare dintre cele 5 variante",
  "explanation": "Recombinarea locală permite generarea unui copil prin combinarea aleatorie a valorilor din părinți, astfel toate cele 5 variante pot apărea."
},
{
  "category": "Genetic Algorithm Operators",
  "question": "Într-un algoritm genetic, operatorul de recombinare depinde de",
  "options": [
    "a. încheierea căutării",
    "b. reprezentarea în spațiul fenotipurilor",
    "c. reprezentarea în spațiul genotipurilor",
    "d. nici unul din celelalte răspunsuri",
    "e. dimensiunea populației de părinți"
  ],
  "answer": "c. reprezentarea în spațiul genotipurilor",
  "explanation": "Operatorii de recombinare lucrează direct pe genotipuri, care sunt reprezentările interne ale indivizilor, deci depind de cum este structurat acest spațiu."
},
{
  "category": "Local Search Algorithms",
  "question": "Algoritmul Hillclimbing are următoarele caracteristici:\n1. Se aplică asupra unui singur punct din spațiul de căutare\n2. Aplicarea se poate repeta pentru mai multe puncte pentru a crește performanțele\n3. Este inspirat din tehnicile de alpinism\n4. Găsește întotdeauna soluția optimă\n5. Găsește soluția optimă\n6. Calculele se încheie atunci când temperatura sistemului devine zero\n7. De obicei găsește un punct de optim local\n8. Se utilizează numai pentru reprezentarea cu șiruri de numere reale",
  "options": [
    "1, 2, 7",
    "1, 3, 5",
    "2, 6, 8",
    "3, 4, 7",
    "1, 2, 4"
  ],
  "answer": "1, 2, 7",
  "explanation": "Algoritmul Hill Climbing este o metodă locală care pornește dintr-un singur punct, poate fi reluată din puncte diferite pentru a evita capcanele optimelor locale și, în general, returnează un punct de optim local, nu global."
}
,
{
  "category": "Evolutionary Algorithms",
  "question": "Într-un algoritm evolutiv, selecția părinților forțează:",
  "options": [
    "îmbunătățirea calității globale a populației de la o generație la alta",
    "obținerea unor candidați la soluție variați",
    "întreruperea calculului",
    "continuarea calculului",
    "reevaluarea celei mai bune soluții obținute până la momentul curent"
  ],
  "answer": "îmbunătățirea calității globale a populației de la o generație la alta",
  "explanation": "Selecția părinților este menită să favorizeze indivizii cu o funcție fitness mai bună, contribuind astfel la o îmbunătățire progresivă a calității populației în fiecare generație."
},
{
  "category": "Genetic Algorithms",
  "question": "În cadrul unui algoritm genetic, operația de selecție a supraviețuitorilor implică următoarele:\n1. Se aplică asupra populației curente\n2. În unele variante necesită calcularea unei distribuții de probabilitate de selecție\n3. Utilizează întotdeauna factori aleatori\n4. Alege generația următoare dintre indivizii disponibili după operația de mutație\n5. Indivizii aleși sunt întotdeauna fezabili\n6. Uneori utilizează factori aleatori\n7. Asigură perpetuarea individului cu calitate maximă din populația curentă\n8. Duce la creșterea calității medii a populației curente\n9. Garantează obținerea unei generații cu calitate medie superioară dacă folosește selecția bazată pe vârstă\n10. Se aplică la începutul fiecărei iterații\n11. Se aplică asupra descendenților obținuți din populația curentă\n12. Se aplică asupra populației curente și asupra descendenților obținuți din populația curentă",
  "options": [
    "2, 4, 5, 6, 12",
    "1, 3, 7, 10",
    "4, 5, 6, 8",
    "2, 5, 9, 12",
    "3, 6, 11"
  ],
  "answer": "2, 4, 5, 6, 12",
  "explanation": "Selecția supraviețuitorilor poate necesita o distribuție de probabilitate (2), implică alegerea după mutație (4), presupune indivizi fezabili (5), uneori implică factori aleatori (6) și poate fi aplicată pe populația curentă și descendenți (12)."
},
{
  "category": "Genetic Algorithms",
  "question": "Fie C un operator genetic de mutație definit în reprezentarea prin permutări de dimensiune n. Alegeți afirmațiile adevărate:\n1. C este unar\n2. Întotdeauna C alege aleator două gene pe baza cărora este în continuare definită mutația\n3. Rezultatul furnizat de C poate avea o dimensiune diferită de n\n4. Rezultatul / rezultatele lui C este / sunt permutare / permutări",
  "options": [
    "1, 2, 3",
    "1, 2, 4",
    "1, 2",
    "1, 4",
    "2, 3, 4"
  ],
  "answer": "1, 4",
  "explanation": "Operatorul C este unar, și rezultatul este o permutare (4)."
},
{
    "category": "Genetic Algorithms",
    "question": "Fie permutările p1=(3, 5, 4, 2, 1, 7, 8, 6) și p2=(1, 6, 7, 2, 3, 4, 5, 8). Rezultatul OCX(p1, p2) pentru secvența de recombinare i=2, j=5 este:",
    "options": [
      "O secvență descrescătoare de numere 1…8 cu posibile duplicate",
      "O permutare a mulțimii 1…8",
      "Nici unul din celelalte răspunsuri",
      "O secvență oarecare de numere 1…8 cu posibile duplicate",
      "O secvență crescătoare de numere 1…8 cu posibile duplicate"
    ],
    "answer": "O permutare a mulțimii 1…8",
    "explanation": "OCX (Order Crossover) produces a valid permutation when applied to permutations. The result is a permutation of the numbers 1 through 8 without duplicates."
  },
  {
  "category": "Genetic Algorithms - Mutation",
  "question": "Fie permutarea p=(11, 12, 8, 3, 5, 4, 9, 2, 1, 7, 10, 6) și rezultatul mutației prin interschimbare q=(11, 12, 8, 3, 5, 4, 9, 2, 1, 10, 7, 6). Prima poziție în permutare este codificată cu 1. Alegeți variantele corecte:",
  "options": [
    "1. Pozițiile folosite pentru mutație sînt: (10, 11); mutația prin inversiune cu (10, 11) are același efect",
    "2. Pozițiile folosite pentru mutație sînt: (10, 11); mutația prin inversiune cu (10, 11) are efect diferit",
    "3. Pozițiile folosite pentru mutație sînt: (10, 11); mutația prin inserare cu (10, 11) are același efect",
    "4. Pozițiile folosite pentru mutație sînt: (10, 11); mutația prin inserare cu (10, 11) are efect diferit"
  ],
  "answer": "1 și 4",
  "explanation": "Mutația prin interschimbare inversează elementele de pe pozițiile indicate. Inversiunea poate da același rezultat în unele cazuri, dar inserarea are comportament diferit, deci afirmațiile 1 și 4 sunt corecte."
},
{
  "category": "Genetic Algorithms - Initial Population",
  "question": "Într-un algoritm genetic, populația inițială este",
  "options": [
    "generată aleator, la începutul căutării",
    "calculată în ciclul evolutiv, la fiecare pas",
    "nici unul din celelalte răspunsuri",
    "parametru de intrare",
    "dată de ieșire"
  ],
  "answer": "generată aleator, la începutul căutării",
  "explanation": "În algoritmii genetici, populația inițială este de obicei generată aleator la începutul procesului de căutare pentru a asigura diversitatea genetică."
},
{
  "category": "Genetic Algorithms - Mutation",
  "question": "Într-un algoritm evolutiv, mutația apare",
  "options": [
    "nici unul din celelalte răspunsuri",
    "exclusiv la indivizii cu calitate slabă",
    "exclusiv la indivizii cu calitate medie",
    "după încheierea căutării",
    "după reproducere"
  ],
  "answer": "după reproducere",
  "explanation": "În cadrul algoritmilor evolutivi, operatorul de mutație este aplicat de obicei după reproducere pentru a introduce variație genetică în populația nouă."
},
{
  "category": "Genetic Algorithms - Initial Population",
  "question": "Într-un algoritm genetic, populația inițială:",
  "options": [
    "Este generată până când este atins un optim local",
    "Este construită o singură dată",
    "Suferă mutație cu o probabilitate relativ mică",
    "Trebuie modificată la fiecare iterație",
    "Conține exclusiv indivizi fezabili",
    "Este formată din indivizii care trec în generația următoare",
    "Este generată utilizînd distribuția de probabilitate normală"
  ],
  "answer": ["2", "5"],
  "explanation": "Într-un algoritm genetic, populația inițială este de obicei generată o singură dată și conține indivizi fezabili. Nu este construită iterativ și nu se bazează neapărat pe o distribuție normală."
},
{
  "category": "Genetic Algorithms",
  "question": "In a genetic algorithm, the initial population:\n1. is generated until a local optimum is reached;\n2. is built only once;\n3. mutates with a low probability;\n4. must be changed at each iteration;\n5. includes only viable individuals;\n6. consists of duals that pass into the next generation;\n7. is generated using the normal probability distribution.",
  "options": [
    "4, 5, 7",
    "2, 5",
    "1, 3",
    "2, 5, 7",
    "1, 2, 7"
  ],
  "answer": "2, 5, 7",
  "explanation": "The initial population in genetic algorithms is:\n2. built only once at the beginning;\n5. usually filtered to include viable individuals;\n7. often generated using a normal distribution or similar stochastic method. Option 1 is incorrect because initial population generation does not continue until a local optimum is reached."
},
{
  "category": "Genetic Algorithms - Recombination",
  "question": "În cadrul unui algoritm genetic, operația de recombinare:\n1. Este efectuată o singură dată pe parcursul unui algoritm genetic\n2. Este efectuată imediat după fiecare etapă de selecție a părinților\n3. În general probabilitatea de recombinare nu contează în rezolvarea problemelor prin algoritmi genetici\n4. Este efectuată imediat înaintea fiecărei proceduri de mutație\n5. Este efectuată imediat înaintea fiecărei etape de selecție a părinților\n6. Utilizează populația inițială\n7. Este utilizată doar în probleme fără constrîngeri\n8. Este utilizată cu probabilitate mare\n9. Este utilizată cu probabilitate mică\n10. Este efectuată o singură dată, după prima etapă de selecție a părinților",
  "options": [
    "2, 4, 8",
    "1, 5, 9",
    "3, 6, 7",
    "2, 3, 10",
    "4, 7, 8"
  ],
  "answer": "2, 4, 8",
  "explanation": "În algoritmii genetici, recombinarea se aplică în mod tipic imediat după selecția părinților (2), înainte de mutație (4), și are o probabilitate mare de aplicare (8) pentru a încuraja diversitatea genetică."
}
,
{
  "category": "Genetic Algorithms - Binary Representation",
  "question": "În algoritmii genetici, reprezentarea binară",
  "options": [
    "Nu depinde de problema rezolvată",
    "Nu este utilizată pentru algoritmi genetici",
    "Este cea mai utilizată variantă de reprezentare a genotipurilor",
    "Nici unul din celelalte răspunsuri nu este corect",
    "Duce mereu la rezultate optime"
  ],
  "answer": "Nici unul din celelalte răspunsuri nu este corect",
  "explanation": "Reprezentarea binară nu este întotdeauna cea mai potrivită alegere și nu garantează rezultate optime. Alegerea tipului de reprezentare depinde de problema rezolvată."
},
{
  "category": "Genetic Algorithms - Characteristics",
  "question": "Un algoritm genetic care maximizează o funcție de calitate este caracterizat prin următoarele:\n1. stocastic\n2. determinist\n3. bazat pe populații\n4. finit\n5. convergent indiferent de operatorii de variație folosiți\n6. convergent, dacă operatorii de variație folosiți acoperă tot spațiul soluțiilor\n7. independent de reprezentare",
  "options": [
    "1, 3, 4, 6",
    "2, 3, 5",
    "1, 2, 7",
    "1, 3, 6",
    "4, 5, 6"
  ],
  "answer": "1, 3, 4, 6",
  "explanation": "Algoritmii genetici sunt în general stocastici (1), lucrează pe o populație (3), rulează pe un număr finit de generații (4) și pot converge dacă operatorii de variație acoperă întreg spațiul de soluții (6)."
},

{
  "category": "Genetic Algorithms - Integer Representation",
  "question": "În algoritmii genetici, reprezentarea prin șiruri de numere întregi",
  "options": [
    "Este doar un exercițiu de implementare, nefiind necesară",
    "Este preferabilă atunci cînd pentru fiecare genă sînt posibile mai mult de două valori distincte",
    "Nu poate fi utilizată în cazul atributelor ordinale",
    "Nu este utilizată în algoritmi genetici",
    "Este preferabilă pentru problemele de optimizare"
  ],
  "answer": "Este preferabilă atunci cînd pentru fiecare genă sînt posibile mai mult de două valori distincte",
  "explanation": "Reprezentarea cu numere întregi este adecvată pentru gene care pot avea mai multe valori discrete, ceea ce o face potrivită în probleme unde binarul ar fi prea restrictiv."
},
{
  "category": "Memetic Algorithms",
  "question": "Scopul unui algoritm memetic este:",
  "options": [
    "de a utiliza factori aleatori",
    "de a îmbunătăți informația de la o populație la alta",
    "de a introduce proprietatea de auto-adaptare",
    "de a îmbunătăți informația din populația curentă prin utilizarea de algoritmi de căutare locală",
    "de a asigura perpetuarea individului cu calitate maximă din populația curentă",
    "de a crește calitatea populației curente",
    "de a procesa separat fiecare iterație",
    "de a utiliza euristici"
  ],
  "answer": ["de a îmbunătăți informația de la o populație la alta", "de a îmbunătăți informația din populația curentă prin utilizarea de algoritmi de căutare locală", "de a crește calitatea populației curente"],
  "explanation": "Algoritmii memetici combină evoluția globală cu îmbunătățiri locale, scopul fiind să optimizeze mai eficient folosind atât schimb de informație între populații, cât și metode locale de rafinare."
},
{
  "category": "Algoritmi Evolutivi",
  "question": "Într-un algoritm evolutiv, operatorii de variație sunt",
  "options": [
    "generarea populației inițiale",
    "mutația și recombinarea",
    "selecția generației următoare",
    "selecția populației de părinți",
    "nici unul din celelalte răspunsuri"
  ],
  "answer": "mutația și recombinarea",
  "explanation": "În cadrul algoritmilor evolutivi, operatorii de variație sunt folosiți pentru a genera diversitate în populație. Mutația introduce modificări aleatorii, iar recombinarea (sau crossover-ul) combină informația genetică a părinților pentru a produce descendenți noi."
},
{
  "category": "Calcul Evolutiv - Tipuri de Probleme",
  "question": "Tipurile de probleme care pot fi rezolvate pe baza calculului evolutiv sunt:",
  "options": [
    "2, 4, 6, 8",
    "2, 3, 4",
    "1, 3, 5, 7",
    "1, 4, 8",
    "1, 4, 6"
  ],
  "answer": "1, 4, 8",
  "explanation": "Calculul evolutiv este aplicabil în rezolvarea problemelor de optimizare (1), de modelare (4) și de simulare (8), deoarece acestea beneficiază de natura exploratorie și adaptivă a algoritmilor genetici și a metodelor inspirate din evoluția naturală."
},
{
  "category": "Strategii Evolutive - Operator de Mutație",
  "question": "Operatorul de mutație în strategiile evolutive:",
  "options": [
    "este de tip neuniform",
    "este de tip amestec",
    "este de tip uniform",
    "este de tip resetare aleatoare",
    "este de tip inversiune"
  ],
  "answer": "este de tip neuniform",
  "explanation": "În strategiile evolutive, mutația de tip neuniform este preferată deoarece permite o explorare mai largă la începutul procesului evolutiv și o exploatare mai fină pe măsură ce algoritmul converge."
},
{
  "category": "Spațiul soluțiilor - Optimizare continuă",
  "question": "Fie următoarea problemă: minimizează f : [a1,b1] x [a2,b2] x ... x [an,bn] -> R, f(x1, x2, ..., xn) = suma(x1, x2, ..., xn) - produs(x1, x2, ..., xn). Spațiul soluțiilor problemei este",
  "options": [
    "mulțimea permutărilor de ordin n",
    "finit",
    "mulțimea vectorilor binari de dimensiune n",
    "infinit",
    "vid"
  ],
  "answer": "infinit",
  "explanation": "Domeniul de definiție este un produs cartezian de intervale reale, deci conține o infinitate de puncte. Spațiul soluțiilor este astfel infinit."
},
{
  "category": "Operatori genetici - CX (Cycle Crossover)",
  "question": "Fie X = [9, 6, 4, 5, 3, 1, 2, 7, 10, 8], Y = [10, 3, 7, 6, 9, 2, 5, 4, 1, 8] permutări părinte. Care din următoarele perechi de permutări rezultă prin aplicarea procedurii CX?",
  "options": [
    "C1 = [6 8 7 10 5 1 9 3 4 2], C2 = [9 1 8 3 6 7 5 10 4 2]",
    "C1 = [9 6 7 5 3 1 2 4 10 8], C2 = [10 3 4 6 9 2 5 7 1 8]",
    "C1 = [6 7 8 10 5 1 9 3 4 2], C2 = [9 8 1 3 6 7 5 10 4 2]",
    "C1 = [8 7 10 5 1 9 3 4 2 6], C2 = [2 9 1 8 3 6 7 5 10 4]",
    "C1 = X, C2 = Y"
  ],
  "answer": "C1 = [6 7 8 10 5 1 9 3 4 2], C2 = [9 8 1 3 6 7 5 10 4 2]",
  "explanation": "Cycle Crossover (CX) păstrează ciclurile dintr-un părinte și completează restul din celălalt. Aceasta este implementarea corectă conform algoritmului CX."
},
{
  "category": "Strategii evolutive generale",
  "question": "Alegeți varianta corectă. Un algoritm din clasa strategiilor evolutive generale care minimizează o funcție f:",
  "options": [
    "Folosește o populație inițială formată din primele elemente din domeniul lui f în ordinea crescătoare a valorilor lui f",
    "Utilizează întotdeauna reprezentarea prin vectori binari",
    "Utilizează întotdeauna reprezentarea prin permutări a elementelor din domeniul lui f",
    "Utilizează întotdeauna reprezentarea prin vectori cu numere reale",
    "Folosește o populație inițială formată din primele elemente din domeniul lui f în ordinea descrescătoare a valorilor lui f"
  ],
  "answer": "Utilizează întotdeauna reprezentarea prin vectori cu numere reale",
  "explanation": "Algoritmii din clasa strategiilor evolutive generale folosesc reprezentarea real-valued (cu vectori de numere reale) pentru a oferi flexibilitate în optimizarea funcțiilor continue."
},
{
  "category": "Funcția fitness în algoritmi genetici",
  "question": "Dacă f este o funcție care trebuie maximizată, f este cu valori pozitive și este definită pe spațiu continuu, atunci pentru optimizarea lui f cu un algoritm genetic în care poate fi utilizată selecția FPS este utilizată funcția calitate (fitness):",
  "options": [
    "1/(1+f)",
    "1-f",
    "1/f",
    "-f",
    "f"
  ],
  "answer": "f",
  "explanation": "Pentru funcții de maximizat cu valori pozitive și definite pe un spațiu continuu, funcția f este direct folosită ca funcție fitness în selecția FPS (Fitness Proportionate Selection)."
},
{
  "category": "Spațiul soluțiilor în probleme de optimizare",
  "question": "Fie următoarea problemă: minimizează f : [a1,b1] x [a2,b2] x ... x [an,bn] -> R, f(x1, x2, ..., xn) = max(x1, x2, ..., xn) - min(x1, x2, ..., xn). Spațiul soluțiilor problemei este",
  "options": [
    "mulțimea vectorilor de dimensiune n, cu valori numere reale conform definiției f",
    "mulțimea permutărilor de ordin n, conform definiției f",
    "finit",
    "mulțimea vectorilor cu numere întregi de dimensiune n conform definiției f",
    "vid"
  ],
  "answer": "mulțimea vectorilor de dimensiune n, cu valori numere reale conform definiției f",
  "explanation": "Funcția este definită pe un spațiu continuu R^n, deci soluțiile sunt vectori cu valori reale, nu discrete sau permutări. Spațiul este infinit, nu finit."
},
{
  "category": "Genetic Algorithms",
  "question": "In a genetic algorithm, parent selection operation:\n1. is used only in constraint problems;\n2. happens only once, after first population is generated;\n3. happens immediately after an evaluated current population is available;\n4. is always based on a selection probability distribution;\n5. uses the mutated descendants population;\n6. may be based on a selection probability distribution;\n7. uses the descendants population;\n8. uses the current population;\n9. happens only once during the entire genetic algorithm;\n10. does not take into account the age factor;\n11. happens immediately before each mutation procedure.",
  "options": [
    "2, 3, 4, 5",
    "3, 6, 8",
    "2, 3, 5, 7, 8",
    "3, 6, 8, 10",
    "1, 6, 9, 11"
  ],
  "answer": "3, 6, 8, 10",
  "explanation": "In genetic algorithms, parent selection:\n3. happens after the current population is evaluated,\n6. may be based on selection probability (e.g., roulette wheel, tournament),\n8. uses the current (not descendant) population. Options like 1, 2, 5, 7, and 11 are incorrect or not standard practice."
},
{
  "category": "Evolutionary Strategies",
  "question": "In evolutionary strategy algorithms, a chromosome includes:",
  "options": [
    "ES algorithms do not use chromosomes.",
    "None of the other answers is correct.",
    "integer values.",
    "component parts vary between the chromosomes of the population, depending on the fitness.",
    "a solution part, a mutation step part and a mutation correlation part."
  ],
  "answer": "a solution part, a mutation step part and a mutation correlation part.",
  "explanation": "In evolutionary strategies, each chromosome typically consists of multiple parts: the actual solution vector, the mutation step size (which can adapt over time), and sometimes a mutation correlation matrix. This structure supports self-adaptive behavior in ES algorithms."
},
{
  "category": "Evolutionary Strategies",
  "question": "The use of distinct mutation steps on each axis (uncorrelated mutation with multiple parameters):\n1. aims to process each axis in a distinct specific manner;\n2. refers to differentiated advance on each axis;\n3. leads to introduction of additional components in candidate vectors (one for each parameter);\nis generally implemented by imposing threshold values on each axis to avoid ineffective mutations (too low step values).",
  "options": [
    "1, 3",
    "2",
    "all are correct",
    "1",
    "1, 2, 3"
  ],
  "answer": "all are correct",
  "explanation": "In uncorrelated mutation with multiple parameters, each axis (dimension) can have its own mutation step. This allows specific, differentiated changes (1 & 2), and requires additional mutation step sizes for each parameter in the chromosome (3). All statements are valid."
},
{
  "category": "Genetic Algorithms",
  "question": "In genetic algorithms, the encoding",
  "options": [
    "None of the other answers is correct.",
    "must be established when the representation is chosen.",
    "does not depend on the chosen representation.",
    "guarantees obtaining the optimal result.",
    "is not necessary."
  ],
  "answer": "must be established when the representation is chosen.",
  "explanation": "In genetic algorithms, the encoding defines how solutions are represented and manipulated. It must be established when selecting the representation, since the operators (e.g., crossover, mutation) rely on the chosen encoding scheme."
},
{
  "category": "Genetic Algorithms",
  "question": "Consider the permutations:\np1 = (3, 5, 4, 2, 1, 7, 8, 6) and\np2 = (1, 6, 7, 2, 3, 4, 5, 8).\nThe result of applying the OCX operator on (p1, p2) using positions i = 2, j = 5 is:",
  "options": [
    "a permutation of 1...8.",
    "None of the other answers is correct.",
    "a descending sequence of numbers 1...8, possibly with duplicates.",
    "a sequence of numbers 1...8, possibly with duplicates.",
    "an ascending sequence of numbers 1...8, possibly with duplicates."
  ],
  "answer": "a permutation of 1...8.",
  "explanation": "Order Crossover (OCX) maintains the permutation property, meaning the resulting offspring will still be a valid permutation of the input set (no duplicates, all elements preserved)."
},
{
  "category": "Genetic Algorithms",
  "question": "Choose the incorrect statements:\n1. Hillclimbing algorithms are based on populations and the current population consists of at least 2 individuals.\n2. The selection of parents in a genetic algorithm is based on the individuals' fitness.\n3. The selection of the next generation in a genetic algorithm uses exclusively the population obtained after mutation.\n4. The recombination in a genetic algorithm depends on the representation of chromosomes.\n5. The maximum numbers of iterations in an evolutionary algorithm does not depend on the representation of chromosomes.",
  "options": [
    "2, 4",
    "2, 3",
    "1, 5",
    "1, 3",
    "2, 5"
  ],
  "answer": "1, 3",
  "explanation": "Statement 1 is incorrect because hill climbing is a single-solution method, not population-based. Statement 3 is incorrect because selection usually considers fitness after evaluation, not just the mutated population. The other statements are correct: parent selection is based on fitness (2), recombination may depend on encoding (4), and iteration count typically does not depend on representation (5)."
},
{
  "category": "Genetic Algorithms",
  "question": "In a genetic algorithm that maximizes a function (fitness):\n1. the selection of next generation is always based on the age of candidates;\n2. only constraint problems can be solved;\n3. FPS selection is not recommended;\n4. the mutation has a low probability;\n5. the descendant multiset does not include doubles;\n6. survivor selection is based on candidate fitness and/or age;\n7. the recombination happens rarely;\n8. the goal is to find a global maximum point;\n9. the chromosome structure is different if the function is translated.",
  "options": [
    "5, 6, 7",
    "1, 3, 5, 9",
    "3, 6, 8",
    "1, 3, 4, 7",
    "4, 6, 8"
  ],
  "answer": "4, 6, 8",
  "explanation": "Correct statements include:\n4. Mutation typically happens with low probability.\n6. Survivor selection often uses fitness and possibly age.\n8. The goal of a GA is usually to find a global maximum (or minimum) of a function. The other options include misleading or incorrect claims (e.g., selection only by age or only solving constraint problems)."
},
{
  "category": "Optimization Algorithms",
  "question": "The hillclimbing algorithm:",
  "options": [
    "is a deterministic algorithm",
    "is a gradient algorithm",
    "None of the other answers are correct.",
    "is an evolutionary algorithm",
    "is a self-adaptive algorithm"
  ],
  "answer": "is a deterministic algorithm",
  "explanation": "Hill climbing is typically a deterministic local search algorithm that iteratively improves a single solution based on a fitness function. It is not evolutionary, gradient-based, or self-adaptive in the classical sense."
},
{
  "category": "Genetic Algorithms",
  "question": "Consider M a genetic mutation operator defined for the permutation representation of size n (studied in class). Select the correct statements:\n1. M is a unary operator\n2. M always randomly selects 2 genes to apply the mutation\n3. The result of M may have a different size than n\n4. The result of M is a permutation",
  "options": [
    "1, 2, 3",
    "1, 2, 4",
    "1, 4",
    "1, 2",
    "2, 3, 4"
  ],
  "answer": "1, 4",
  "explanation": "1. Mutation is a unary operator as it works on a single individual.\n4. Since M operates on permutations, the result must remain a valid permutation. Statement 3 is false: mutation should preserve the length of the permutation."
},
{
  "category": "Genetic Algorithms",
  "question": "Consider the permutations:\nx = {2, 4, 9, 6, 5, 7, 8, 1, 3, 10} and\ny = {8, 2, 6, 4, 1, 5, 7, 10, 3, 9}.\nBy applying the PMX operator, this descendant is created:\nc = {8, 4, 9, 6, 5, 7, 1, 10, 3, 2}.\nThe order of parents and the positions used are:",
  "options": [
    "(y, x) and (2, 6)",
    "(x, y) and (2, 6)",
    "(y, x) and (1, 4)",
    "(x, y) and (1, 4)",
    "(y, x) and (1, 5)"
  ],
  "answer": "(y, x) and (2, 6)",
  "explanation": "The child 'c' contains the middle segment from parent x and the rest filled based on y with PMX logic. Therefore, the correct order is (y, x), and the segment was taken from positions 2 to 6 (1-based index)."
},
{
  "category": "Evolutionary Strategies",
  "question": "Generally, an ES algorithm based on populations:\n1. starts a stochastic search in the solution space;\n2. uses mutation as the main generator of new individuals;\n3. uses elitist selection to generate the parent population;\n4. computes all optimal solutions of a problem;\n5. uses a local or global recombination operator.",
  "options": [
    "2, 3, 4",
    "5",
    "1, 3, 5",
    "1, 2, 3",
    "1, 2, 5"
  ],
  "answer": "1, 2, 5",
  "explanation": "not sure if it's 5 or 3"
},
{
  "category": "Evolutionary Algorithms",
  "question": "In an evolutionary algorithm, the fitness function:",
  "options": [
    "is established by Holland",
    "estimates the level of adaptation of a candidate",
    "is defined on the 1-dimensional space",
    "is chosen based on the population size",
    "is an asymptotic function"
  ],
  "answer": "estimates the level of adaptation of a candidate",
  "explanation": "In evolutionary algorithms, the fitness function evaluates how well a candidate solution adapts to the problem environment — it quantifies the 'fitness' or quality of each solution in the population."
},
{
  "category": "Evolutionary Algorithms",
  "question": "In an evolutionary algorithm, mutation happens:",
  "options": [
    "None of the other answers is correct.",
    "after recombination",
    "only on individuals with average fitness",
    "after the end of the search",
    "only on individuals with low fitness"
  ],
  "answer": "after recombination",
  "explanation": "In evolutionary algorithms, mutation typically occurs **after recombination** in the genetic pipeline. It introduces random variation to offspring and is not restricted to individuals of certain fitness levels."
},
{
  "category": "Neighborhood Structures in Search Algorithms",
  "question": "Consider x a binary vector with 10 elements that fulfills a viability condition A. A neighbor of x is a binary vector with 10 elements that fulfills the condition A and is at Hamming distance 1 from x. The set of neighbors of x:\n1. has 10 elements\n2. has at most 10 elements\n3. has 10 elements with better fitness than x\n4. has an even number of elements\n5. does not include doubles.",
  "options": [
    "1, 5",
    "2, 4",
    "3, 5",
    "2, 5",
    "4, 5"
  ],
  "answer": "1, 5",
  "explanation": "Each neighbor must differ from x in exactly one position (Hamming distance 1), and since x has 10 binary elements, it has exaclty 10 such neighbors (each differing by flipping one bit). Also, valid neighbor sets do not include duplicates by definition. Statement 3 is incorrect because not all neighbors are guaranteed to have better fitness; 4 is irrelevant to binary vector length."
},
{
  "category": "Genetic Algorithms",
  "question": "Generally, a genetic algorithm:\n1. starts a stochastic search in the solution space;\n2. uses a single variation operator;\n3. uses the tournament selection with FPS probability distribution;\n4. computes all the optimal solutions of a problem;\n5. uses DNA chains.",
  "options": [
    "1, 2, 3",
    "2, 3, 4",
    "1, 3, 4",
    "1",
    "5"
  ],
  "answer": "1",
  "explanation": "Statement 1 is true: Genetic Algorithms (GAs) are stochastic search methods. Statement 2 is false because GAs typically use multiple operators (selection, crossover, mutation). Statement 3 is incorrect: tournament selection and FPS (fitness proportionate selection) are two distinct selection methods. Statement 4 is false — GAs aim for good solutions, not necessarily *all* optimal ones. Statement 5 is irrelevant — GAs use *chromosomes*, not biological DNA chains literally."
},
{
  "category": "Genetic Algorithms",
  "question": "In genetic algorithms, decoding",
  "options": [
    "is not necessary.",
    "guarantees obtaining the optimal result.",
    "must be performed after extracting the best individual of each generation.",
    "None of the other answers is correct.",
    "does not depend on the chosen representation."
  ],
  "answer": "None of the other answers is correct.",
  "explanation": "Decoding is necessary to interpret a chromosome into a meaningful solution. It is not dependent solely on extracting the best individual, nor does it guarantee optimality. Moreover, decoding often *does* depend on the chosen representation — so none of the other answers are entirely correct."
},
{
  "category": "Genetic Algorithms",
  "question": "In a genetic algorithm, survivor selection:\n1. is applied on current population;\n2. in some cases requires computing a selection probability distribution;\n3. always uses stochastic factors;\n4. selects the next generation from individuals available after the mutation operation;\n5. selected individuals are always viable;\n6. sometimes uses stochastic factors;\n7. ensures the survival of the highest fitness individual from the current population;\n8. leads to an increase of average fitness in the current population;\n9. guarantees obtaining a population with superior average fitness if the age-based selection is used;\n10. is applied at the beginning of each iteration;\n11. is applied on the descendants obtained from the current population;\n12. is applied on the current population and the descendants obtained from the current population.",
  "options": [
    "4, 8, 11",
    "2, 4, 5, 6, 12",
    "6, 8, 11",
    "1, 7",
    "2, 3, 4, 5, 6, 11"
  ],
  "answer": "2, 4, 5, 6, 12",
  "explanation": "Not sure if this is correct, but it seems to be the most comprehensive option. Survivor selection in GAs can involve:\n- 2: sometimes requires a probability distribution (e.g., tournament selection),\n- 4: typically selects from individuals after mutation,\n- 5: selected individuals are viable (fit enough),\n- 6: may use stochastic factors (e.g., roulette wheel),\n- 12: can involve both current and descendant populations.\nOther options are either too narrow or incorrect."
},
{
  "category": "Genetic Algorithms",
  "question": "Consider C a genetic recombination operator defined for the representation with permutations of size n (studied in class). Choose the correct statements:\n1. C is defined on a pair of permutations of size n.\n2. C always randomly selects two genes to implement the operation.\n3. The result of C is always unique.\n4. The result(s) of C is (are) permutation(s).",
  "options": [
    "1, 2, 3",
    "1, 2, 4",
    "1, 2",
    "1, 4",
    "3, 4"
  ],
  "answer": "1, 4",
  "explanation": "Statement 1 is correct: recombination operators like PMX or OX operate on two parent permutations of the same size. Statement 4 is also correct: the result must be a valid permutation. Statement 2 is false — not all recombination operators select genes randomly (some use fixed points or slices). Statement 3 is false because recombination can produce multiple possible outcomes."
},
{
  "category": "Genetic Algorithms",
  "question": "Consider f a fitness function with positive values, defined on the size n permutation space. In a genetic algorithm that maximizes f:",
  "options": [
    "a mutation operation on a candidate always produces a weaker candidate.",
    "the selection of next generation is always elitist.",
    "a mutation operation on a candidate always produces a better candidate.",
    "the parent selection may be implemented using the FPS probability distribution.",
    "None of the other answers are correct."
  ],
  "answer": "the parent selection may be implemented using the FPS probability distribution.",
  "explanation": "Fitness Proportionate Selection (FPS), also known as roulette wheel selection, is a valid and commonly used method for parent selection in genetic algorithms. Mutation is stochastic and can produce better or worse candidates, and selection is not necessarily elitist."
},
{
  "category": "Evolutionary Algorithms",
  "question": "The main feature of the fitness function in an evolutionary algorithm is that:",
  "options": [
    "None of the other answers is correct.",
    "determines the end of the search process",
    "determines the recombination operation",
    "it is the basis for the mutation process",
    "it is the basis for the selection process"
  ],
  "answer": "it is the basis for the selection process",
  "explanation": "In evolutionary algorithms, the fitness function evaluates how well individuals perform relative to the problem objective. It is primarily used during the **selection process** to prefer better candidates for reproduction."
},
{
  "category": "Evolutionary Strategies",
  "question": "In ESs, chromosomes representation:\n1. Can be any of the following: binary strings, integer strings, real-valued vectors, permutations\n2. Can be integer strings or real-valued vectors\n3. Uses only real-valued vectors\n4. Does not influence the recombination operator\n5. Is determined by the particular problem to be solved\n6. Influences the crossover operator\n7. Influences the survivors selection mechanism",
  "options": [
    "1, 3, 4",
    "3, 4",
    "2, 4, 5",
    "1, 7",
    "2, 4, 5, 6"
  ],
  "answer": "3, 4",
  "explanation": "Not sure"
},
{
  "category": "Genetic Algorithms",
  "question": "The mating pool selection in GAs:\n1. Is used to solve only constrained problems\n2. Is applied once, after the initial population generation\n3. Is applied immediately an evaluated current population is available\n4. Is always based on a selection probability distribution\n5. Is applied on mutated offspring multiset\n6. Can be implemented based on a selection probability distribution\n7. Is an iterative process\n8. Is applied on current population\n9. Is applied once\n10. Generally uses the age factor to select individuals\n11. Is applied immediately before each mutation procedure\n12. Is applied on offspring multiset",
  "options": [
    "2, 5, 8, 12",
    "3, 6, 7, 8",
    "3, 6, 8, 12",
    "4, 6, 7, 8",
    "1, 2, 4, 5"
  ],
  "answer": "3, 6, 7, 8",
  "explanation": "Not sure, but it seems to be the most comprehensive option. Mating pool selection in GAs is typically:\n- 3: applied after evaluating the current population,\n- 6: can use a selection probability distribution (e.g., roulette wheel),\n- 7: is iterative as it happens across generations,\n- 8: uses the current population for selection.\nOther options are either too narrow or incorrect."
},
{
  "category": "Genetic Algorithms",
  "question": "In GAs, the termination condition:\n1. Could miss\n2. Includes the control of the number of simulated generations\n3. Always uses random factors\n4. May include the population variability control\n5. Improves the average quality of the current population\n6. Guarantees a better population in case it uses age factor\n7. Does not depend on the chromosome encoding\n8. Depends on the chromosome representation",
  "options": [
    "2, 3, 4, 5",
    "1, 5, 8",
    "1, 4, 7, 8",
    "3, 5, 6",
    "2, 4, 7"
  ],
  "answer": "2, 4, 7",
  "explanation": "Correct answers include:\n- 2: Termination can be based on a max number of generations.\n- 4: It can involve criteria like loss of diversity or lack of variability.\n- 7: Termination is typically independent of how the chromosome is encoded — it's more about population dynamics and convergence.\nOther options include incorrect or irrelevant statements (e.g., 1, 3, 5, 6, 8)."
},
{
  "category": "Genetic Algorithms",
  "question": "In every GA, the genotype representation:\n1. Can be any of the following: binary, integer, real valued vectors and permutation\n2. Is either integer representation or real valued vectors representation\n3. Is the real valued vectors representation\n4. Does not affect the recombination type\n5. Depends on the given problem\n6. Affects the recombination type\n7. Affects the mutation operator\n8. Affects the selections",
  "options": [
    "1, 3, 4, 6",
    "1, 5, 6, 7",
    "4, 5, 6, 7",
    "1, 5, 6, 8",
    "4, 5, 6, 7, 8"
  ],
  "answer": "1, 5, 6, 7",
  "explanation": " In GAs, the genotype representation:\n1. Can be binary, integer, real-valued vectors, or permutations.\n5. Depends on the problem being solved (e.g., TSP uses permutations).\n6. Affects recombination type (e.g., PMX for permutations, arithmetic for real-valued).\n7. Affects mutation operator (e.g., bit-flip for binary, Gaussian for real-valued).\n8 is not always true as selection methods can be independent of representation."
},
{
  "category": "Genetic Algorithms",
  "question": "Let v = [0, 1, 1, 0, 0, 1, 0] be a binary vector. Select the correct statement(s):\na. A mutation in a gene of v can produce a vector with all bits equal to 1;\nb. A mutation in a gene of v can produce a vector with all bits equal to 0;\nc. A mutation in a gene of v can produce a vector with 4 bits equal to 1;\nd. A mutation in a gene of v can produce a vector with 4 bits equal to 0;\ne. None of the other answers.",
  "options": [
    "b, c and d",
    "c",
    "a, b and d",
    "a, d, c and d",
    "e"
  ],
  "answer": "c",
  "explanation": "A mutation in a binary vector flips one bit. The vector v has 4 bits equal to 1 and 3 bits equal to 0. Flipping any of the bits that are currently 0 will not produce a vector with all bits equal to 1 or all bits equal to 0, but it can produce a vector with exactly 4 bits equal to 1 (by flipping one of the 0s). Thus, only option c is correct."
},
{
  "category": "Evolutionary Algorithms - Selection",
  "question": "In an evolutionary algorithm, the selection process favors",
  "options": [
    "a. None of the other answers is correct.",
    "b. the best adapted individuals",
    "c. the average individuals",
    "d. the end of the search",
    "e. the low fitness individuals"
  ],
  "answer": "b. the best adapted individuals",
  "explanation": "In evolutionary algorithms, the selection process favors individuals with the highest fitness, as they are considered the best adapted to the problem environment and are more likely to pass on their genes to the next generation."
},
{
  "category": "Genetic Algorithms - Representation",
  "question": "In genetic algorithms, the binary representation",
  "options": [
    "a. does not depend on the problem being solved.",
    "b. None of the other answers is correct.",
    "c. is the most commonly used genotype representation.",
    "d. is not used.",
    "e. always leads to optimal results."
  ],
  "answer": "c. is the most commonly used genotype representation.",
  "explanation": "Binary representation is often used in genetic algorithms, but its use depends on the nature of the problem. It is not always the best or optimal choice, nor does it guarantee optimal results, and it is definitely used in many GAs — so none of the other answers are entirely correct."
},
{
  "category": "Genetic Algorithms - Genotype and Phenotype",
  "question": "In an evolutionary algorithm, the genotypes are",
  "options": [
    "a. individuals with high fitness",
    "b. individuals with average fitness",
    "c. None of the other answers is correct.",
    "d. representations of phenotypes in an evolutionary context",
    "e. individuals with low fitness"
  ],
  "answer": "d. representations of phenotypes in an evolutionary context",
  "explanation": "In evolutionary algorithms, a genotype is the internal representation (often a binary string or other encoding) of a solution, which is mapped to a phenotype (the actual solution). Thus, genotypes are representations of phenotypes in an evolutionary context."
},
{
  "category": "Evolutionary Strategies - Self-Adaptation",
  "question": "In evolutionary strategy algorithms based on populations, self-adaptation is performed",
  "options": [
    "a. by using a distinct mutation step for each individual.",
    "b. on individuals with fitness values close to the optimum.",
    "c. after a preset number of generations.",
    "d. None of the other answers is correct.",
    "e. based on 1/5 success rate."
  ],
  "answer": "e. based on 1/5 success rate.",
  "explanation": "Self-adaptation in population-based evolutionary strategies involves evolving strategy parameters alongside individuals, and none of the listed options correctly describe the general self-adaptation approach, hence 'd' is correct."
},
{
  "category": "Evolutionary Algorithms - Selection",
  "question": "In an evolutionary algorithm, parent selection forces:",
  "options": [
    "a. ending the computations.",
    "b. improvement of global fitness when switching to the new generation.",
    "c. continuation of computations.",
    "d. reevaluation of the best solution obtained until the current moment.",
    "e. diversity in the multiset of candidates."
  ],
  "answer": "b. improvement of global fitness when switching to the new generation.",
  "explanation": "Parent selection favors individuals with higher fitness, thus improving overall population quality."
},
{
  "category": "Genetic Algorithms - Mutation",
  "question": "Choose the correct statement:",
  "options": [
    "a. The stop condition in a genetic algorithm depends on the representation of chromosomes.",
    "b. 2MES algorithms always compute a global optimum.",
    "c. The mutation in a genetic algorithm depends on the representation of chromosomes.",
    "d. The selection of the next generation in a genetic algorithm depends on the representation of chromosomes.",
    "e. The selection of parents in a genetic algorithm depends on the representation of chromosomes."
  ],
  "answer": "c. The mutation in a genetic algorithm depends on the representation of chromosomes.",
  "explanation": "The mutation operator in genetic algorithms is affected by how the chromosome is represented (e.g., binary, integer, permutation). Different representations require different mutation strategies."
},
{
  "category": "Genetic Algorithms - Mutation",
  "question": "The arity of the mutation operator in a genetic algorithm is:",
  "options": [
    "a. not fixed",
    "b. None of the other answers is correct.",
    "c. unary",
    "d. binary",
    "e. higher than 9"
  ],
  "answer": "c. unary",
  "explanation": "In genetic algorithms, the mutation operator is typically unary, meaning it operates on a single individual (solution) to produce a modified version of it."
},
{
  "category": "Evolutionary Algorithms - Components",
  "question": "The components of evolutionary algorithms are: 1. the representation; 2. the mutation probability; 3. the fitness function; 4. the recombination probability; 5. the population; 6. the random number generation; 7. the parent selection mechanism; 8. the generation of permutations; 9. the graphical representation of evolution of fitness; 10. the variation operators; 11. the calculation of the genetic diversity of the population; 12. the mechanism for replacing the current population; 13. hillclimbing; 14. population initialization; 15. stop condition; 16. also used in evolutionary strategies.",
  "options": [
    "a. 1, 3, 5, 6, 10, 13, 14, 15",
    "b. 2, 4, 5, 9, 15",
    "c. 2, 4, 6, 8, 11, 13, 16",
    "d. 1, 2, 5, 6, 7, 14, 15",
    "e. 1, 3, 5, 7, 10, 12, 14, 15, 16"
  ],
  "answer": "e. 1, 3, 5, 7, 10, 12, 14, 15, 16",
  "explanation": "The key components of evolutionary algorithms include representation, fitness function, population, selection, variation operators, population replacement, and stopping condition. Hillclimbing and permutations are not core components, while graphical visualization and diversity measurement are supplementary."
},
{
  "category": "Evolutionary Algorithms - Fitness Function",
  "question": "In an evolutionary algorithm, the fitness function: 1. evaluates the quality of the algorithm; 2. evaluates the quality of each candidate; 3. evaluates the speed of finding the solution vs. resource consumption; 4. must be optimized; 5. decides if a descendent is viable; 6. selects the individuals that will reproduce; 7. selects the individuals that pass into the next generation; 8. is a chromosome function; 9. evaluates the quality of the current generation; 10. evaluates the quality of the current generation vs. the previous generation.",
  "options": [
    "a. 5, 8",
    "b. 6, 7, 8",
    "c. 9, 10",
    "d. 1, 3",
    "e. 2, 4, 8"
  ],
  "answer":  "e. 2, 4, 8",
  "explanation": "Not sure"
},
{
  "category": "Optimization - Global Maximum Methods",
  "question": "Consider f : D=[0,1] → [0,5] the target function (fitness) of a maximization problem. A method that can compute a global maximum point of f is: 1. compute the fitness of every element in D and choose the best one; 2. backtracking; 3. generally stochastic, based on individuals; 4. generally stochastic, based on populations; 5. any of the other methods can be used.",
  "options": [
    "a. 4, 5",
    "b. 5",
    "c. 4",
    "d. 2, 5",
    "e. 1, 5"
  ],
  "answer":  "e. 1, 5",
  "explanation": "Computing the fitness of every element (exhaustive search) ensures the global maximum is found. Alternatively, metaheuristic methods may work but without a guarantee—so 'any method' covers this possibility."
},
{
  "category": "Evolutionary Algorithms - Fundamentals",
  "question": "An evolutionary algorithm",
  "options": [
    "a. imposes an update rule which depends on the current iteration.",
    "b. uses a representation independent of the problem solution space.",
    "c. does not depend on the particular problem to be solved.",
    "d. None of the other answers is correct.",
    "e. operates on the same population of candidates in every iteration."
  ],
  "answer": "d. None of the other answers is correct.",
  "explanation": "All other options are incorrect or misleading. Evolutionary algorithms adapt across generations, use problem-dependent representations, and typically evolve a changing population — thus 'None of the other answers is correct' is the valid choice."
},
{
  "category": "Genetic Algorithms - GENITOR Selection",
  "question": "Consider a genetic algorithm that uses a current population with 5 members and stable-state population model, with constant size. The fitness values for the current population are {2, 2, 8, 9, 9} and 2 descendants were created, with fitness values 7 and 8. Using the GENITOR selection mechanism with miu=5, lambda=2, the fitness values of the new population are:",
  "options": [
    "{7, 8, 8, 8, 9}",
    "{2, 7, 8, 9, 9}",
    "{2, 2, 7, 8, 8}",
    "{7, 8, 8, 9, 9}",
    "{8, 8, 8, 9, 9}"
  ],
  "answer": "{7, 8, 8, 9, 9}",
  "explanation": "In the GENITOR approach, the worst individuals are replaced by the new offspring. Given the original population {2, 2, 8, 9, 9} and offspring {7, 8}, the two worst individuals (2, 2) are replaced by 7 and 8, yielding the new population: {7, 8, 8, 9, 9}."
},
{
  "category": "Genetic Algorithms - Representation",
  "question": "In genetic algorithms, the permutation representation",
  "options": [
    "does not allow the use of recombination operators.",
    "is used in problems where the order of a sequence of events must be computed.",
    "does not allow the use of mutation operators.",
    "is not used.",
    "does not allow the use of selection operators."
  ],
  "answer": "is used in problems where the order of a sequence of events must be computed.",
  "explanation": "Permutation representation is commonly used in problems where the order of items matters, such as scheduling or the traveling salesman problem. It allows for the use of both recombination and mutation operators, specially adapted to maintain valid permutations."
}
];

// Quiz State Management
class QuizApp {
  constructor() {
    // Quiz state
    this.currentQuestions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;
    this.userAnswers = [];
    this.quizStarted = false;
    
    // DOM elements
    this.startScreen = document.getElementById('start-screen');
    this.quizScreen = document.getElementById('quiz-screen');
    this.resultScreen = document.getElementById('result-screen');
    
    this.startBtn = document.getElementById('start-quiz');
    this.submitBtn = document.getElementById('submit');
    this.nextBtn = document.getElementById('next');
    this.restartBtn = document.getElementById('restart-quiz');
    this.reviewBtn = document.getElementById('review-answers');
    
    this.questionEl = document.getElementById('question');
    this.optionsEl = document.getElementById('options');
    this.progressEl = document.getElementById('progress');
    this.questionCounterEl = document.getElementById('question-counter');
    this.scoreDisplayEl = document.getElementById('score-display');
    this.feedbackEl = document.getElementById('feedback');
    
    this.resultIconEl = document.getElementById('result-icon');
    this.resultTitleEl = document.getElementById('result-title');
    this.finalScoreEl = document.getElementById('final-score');
    this.scorePercentageEl = document.getElementById('score-percentage');
    this.performanceMessageEl = document.getElementById('performance-message');
    this.totalQuestionsEl = document.getElementById('total-questions');
    
    this.init();
  }
  
  init() {
    // Update total questions count
    this.totalQuestionsEl.textContent = questionDatabase.length;
    
    // Event listeners
    this.startBtn.addEventListener('click', () => this.startQuiz());
    this.submitBtn.addEventListener('click', () => this.submitAnswer());
    this.nextBtn.addEventListener('click', () => this.nextQuestion());
    this.restartBtn.addEventListener('click', () => this.restartQuiz());
    this.reviewBtn.addEventListener('click', () => this.reviewAnswers());
    
    // Option selection event delegation
    this.optionsEl.addEventListener('click', (e) => {
      if (e.target.closest('.option')) {
        this.selectOption(e.target.closest('.option'));
      }
    });
  }
  
  startQuiz() {
    // Reset quiz state
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.quizStarted = true;
    
    // Select 20 random questions
    this.currentQuestions = this.getRandomQuestions(20);
    
    // Show quiz screen
    this.showScreen('quiz');
    
    // Load first question
    this.loadQuestion();
  }
  
  getRandomQuestions(count) {
    const shuffled = [...questionDatabase].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
  
  showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    
    // Show selected screen
    const targetScreen = document.getElementById(`${screenName}-screen`);
    if (targetScreen) {
      targetScreen.classList.add('active');
    }
  }
  
  loadQuestion() {
    const question = this.currentQuestions[this.currentQuestionIndex];
    
    // Update progress
    const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
    this.progressEl.style.width = `${progress}%`;
    
    // Update question counter and score
    this.questionCounterEl.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.currentQuestions.length}`;
    this.scoreDisplayEl.textContent = `Score: ${this.score}`;
    
    // Load question content
    this.questionEl.textContent = question.question;
    
    // Clear previous options
    this.optionsEl.innerHTML = '';
    
    // Shuffle options to randomize the order
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    
    // Create option elements
    shuffledOptions.forEach((option, index) => {
      const optionEl = document.createElement('div');
      optionEl.className = 'option';
      optionEl.innerHTML = `
        <label>
          <input type="radio" name="option" value="${option}" style="display: none;">
          ${option}
        </label>
      `;
      this.optionsEl.appendChild(optionEl);
    });
    
    // Reset UI state
    this.selectedAnswer = null;
    this.submitBtn.disabled = true;
    this.submitBtn.classList.remove('hidden'); // Make sure submit button is visible
    this.nextBtn.classList.add('hidden');
    this.feedbackEl.classList.add('hidden');
    this.feedbackEl.className = 'feedback hidden';
  }
  
  selectOption(optionEl) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
      opt.classList.remove('selected');
    });
    
    // Mark as selected
    optionEl.classList.add('selected');
    this.selectedAnswer = optionEl.querySelector('input').value;
    this.submitBtn.disabled = false;
  }
  
  submitAnswer() {
    if (!this.selectedAnswer) return;
    
    const question = this.currentQuestions[this.currentQuestionIndex];
    const isCorrect = this.selectedAnswer === question.answer;
    
    // Store user answer
    this.userAnswers.push({
      question: question.question,
      userAnswer: this.selectedAnswer,
      correctAnswer: question.answer,
      isCorrect: isCorrect,
      explanation: question.explanation,
      category: question.category
    });
    
    // Update score
    if (isCorrect) {
      this.score++;
    }
    
    // Show visual feedback on options
    document.querySelectorAll('.option').forEach(optionEl => {
      const optionValue = optionEl.querySelector('input').value;
      if (optionValue === question.answer) {
        optionEl.classList.add('correct');
      } else if (optionValue === this.selectedAnswer && !isCorrect) {
        optionEl.classList.add('incorrect');
      }
    });
    
    // Show feedback
    this.showFeedback(isCorrect, question.explanation);
    
    // Update UI
    this.submitBtn.classList.add('hidden');
    this.nextBtn.classList.remove('hidden');
    
    // Auto advance after last question
    if (this.currentQuestionIndex === this.currentQuestions.length - 1) {
      this.nextBtn.textContent = 'Finish Quiz';
    }
  }
  
  showFeedback(isCorrect, explanation) {
    this.feedbackEl.classList.remove('hidden');
    this.feedbackEl.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const feedbackTitle = isCorrect ? '✅ Correct!' : '❌ Incorrect';
    this.feedbackEl.innerHTML = `
      <h3>${feedbackTitle}</h3>
      <p>${explanation}</p>
    `;
  }
  
  nextQuestion() {
    this.currentQuestionIndex++;
    
    if (this.currentQuestionIndex < this.currentQuestions.length) {
      this.loadQuestion();
    } else {
      this.showResults();
    }
  }
  
  showResults() {
    const percentage = Math.round((this.score / this.currentQuestions.length) * 100);
    
    // Update final score display
    this.finalScoreEl.textContent = `${this.score}/${this.currentQuestions.length}`;
    this.scorePercentageEl.textContent = `${percentage}%`;
    
    // Set result icon and title based on performance
    if (percentage >= 90) {
      this.resultIconEl.textContent = '🏆';
      this.resultTitleEl.textContent = 'Excellent!';
      this.performanceMessageEl.textContent = 'Outstanding performance! You have excellent knowledge of business law concepts.';
    } else if (percentage >= 80) {
      this.resultIconEl.textContent = '🎉';
      this.resultTitleEl.textContent = 'Great Job!';
      this.performanceMessageEl.textContent = 'Very good performance! You have solid understanding of business law principles.';
    } else if (percentage >= 70) {
      this.resultIconEl.textContent = '👍';
      this.resultTitleEl.textContent = 'Good Work!';
      this.performanceMessageEl.textContent = 'Good performance! You have decent knowledge with room for improvement.';
    } else if (percentage >= 60) {
      this.resultIconEl.textContent = '📚';
      this.resultTitleEl.textContent = 'Keep Learning!';
      this.performanceMessageEl.textContent = 'Fair performance. Consider reviewing the material and taking another quiz.';
    } else {
      this.resultIconEl.textContent = '💪';
      this.resultTitleEl.textContent = 'Keep Trying!';
      this.performanceMessageEl.textContent = 'You need more study time. Review the materials and practice more questions.';
    }
    
    // Show result screen
    this.showScreen('result');
  }
  
  restartQuiz() {
    // Reset button text
    this.nextBtn.textContent = 'Next Question';
    
    // Show start screen
    this.showScreen('start');
  }
  
  reviewAnswers() {
    // Create review screen dynamically
    const reviewHTML = `
      <div class="review-content">
        <h2>📋 Answer Review</h2>
        <div class="review-summary">
          <p>Final Score: <strong>${this.score}/${this.currentQuestions.length}</strong> (${Math.round((this.score / this.currentQuestions.length) * 100)}%)</p>
        </div>
        <div class="review-questions">
          ${this.userAnswers.map((answer, index) => `
            <div class="review-question ${answer.isCorrect ? 'correct' : 'incorrect'}">
              <h3>Question ${index + 1} <span class="category-tag">${answer.category}</span></h3>
              <p class="question-text">${answer.question}</p>
              <div class="answer-comparison">
                <div class="user-answer">
                  <strong>Your Answer:</strong> ${answer.userAnswer}
                  ${answer.isCorrect ? '✅' : '❌'}
                </div>
                ${!answer.isCorrect ? `<div class="correct-answer"><strong>Correct Answer:</strong> ${answer.correctAnswer}</div>` : ''}
              </div>
              <div class="explanation">
                <strong>Explanation:</strong> ${answer.explanation}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="review-actions">
          <button id="back-to-results" class="btn btn-secondary">Back to Results</button>
          <button id="new-quiz-from-review" class="btn btn-primary">Take New Quiz</button>
        </div>
      </div>
    `;
    
    // Replace result screen content temporarily
    const originalContent = this.resultScreen.innerHTML;
    this.resultScreen.innerHTML = reviewHTML;
    
    // Add event listeners for review screen
    document.getElementById('back-to-results').addEventListener('click', () => {
      this.resultScreen.innerHTML = originalContent;
      // Re-add event listeners
      this.restartBtn = document.getElementById('restart-quiz');
      this.reviewBtn = document.getElementById('review-answers');
      this.restartBtn.addEventListener('click', () => this.restartQuiz());
      this.reviewBtn.addEventListener('click', () => this.reviewAnswers());
    });
    
    document.getElementById('new-quiz-from-review').addEventListener('click', () => {
      this.resultScreen.innerHTML = originalContent;
      // Re-add event listeners
      this.restartBtn = document.getElementById('restart-quiz');
      this.reviewBtn = document.getElementById('review-answers');
      this.restartBtn.addEventListener('click', () => this.restartQuiz());
      this.reviewBtn.addEventListener('click', () => this.reviewAnswers());
      this.startQuiz();
    });
    
    // Add review-specific styles
    const reviewStyles = `
      <style>
        .review-content { padding: 2rem; max-height: 70vh; overflow-y: auto; }
        .review-summary { background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center; }
        .review-question { margin-bottom: 2rem; padding: 1.5rem; border-radius: 12px; border-left: 5px solid #ddd; }
        .review-question.correct { border-left-color: #28a745; background: #f8fff9; }
        .review-question.incorrect { border-left-color: #dc3545; background: #fff8f8; }
        .category-tag { font-size: 0.8rem; background: #667eea; color: white; padding: 0.2rem 0.5rem; border-radius: 4px; }
        .question-text { font-weight: 600; margin: 1rem 0; }
        .answer-comparison { margin: 1rem 0; }
        .user-answer, .correct-answer { margin: 0.5rem 0; }
        .explanation { background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-top: 1rem; }
        .review-actions { text-align: center; padding-top: 2rem; border-top: 1px solid #eee; margin-top: 2rem; }
      </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', reviewStyles);
  }
}

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZlimBOZ2yAtj9e_Ulm1I9McWz_8H2gWo",
  authDomain: "griledrept-acb34.firebaseapp.com",
  databaseURL: "https://griledrept-acb34-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "griledrept-acb34",
  storageBucket: "griledrept-acb34.firebasestorage.app",
  messagingSenderId: "637882042012",
  appId: "1:637882042012:web:eba724f584377c2bca4f59",
  measurementId: "G-5E47GKCJT2"
};

// Real-time Active Users Counter with Firebase + Fake Boost
class RealTimeUsersCounter {
  constructor() {
    this.countElement = document.getElementById('active-count');
    this.userRef = null;
    this.usersRef = null;
    this.database = null;
    this.userId = this.generateUserId();
    this.realUserCount = 1;
    this.fakeBoost = this.generateFakeBoost();
    this.lastBoostUpdate = Date.now();
    
    this.initFirebase();
    this.startFakeBoostUpdater();
  }
  
  generateUserId() {
    return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }
  
  generateFakeBoost() {
    // Generate fake boost between 3-10 users
    return Math.floor(Math.random() * 8) + 3; // 3 to 10
  }
  
  startFakeBoostUpdater() {
    // Update fake boost every 10 minutes (600,000 ms)
    setInterval(() => {
      this.updateFakeBoost();
    }, 600000); // 10 minutes
    
    // Also update occasionally for more realistic feel (every 2-5 minutes)
    setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance
        this.updateFakeBoost();
      }
    }, Math.random() * 180000 + 120000); // 2-5 minutes
  }
  
  updateFakeBoost() {
    const oldBoost = this.fakeBoost;
    const newBoost = this.generateFakeBoost();
    
    // 20% chance for sudden drop (like users leaving quickly)
    if (Math.random() < 0.2 && newBoost < oldBoost) {
      this.fakeBoost = newBoost;
      this.updateDisplayedCount();
      console.log(`User count sudden drop: ${oldBoost} → ${newBoost} fake users`);
    } else {
      // Smooth transition
      this.smoothBoostTransition(oldBoost, newBoost);
    }
  }
  
  smoothBoostTransition(from, to) {
    const steps = 8;
    const stepValue = (to - from) / steps;
    let current = from;
    let step = 0;
    
    const transition = setInterval(() => {
      current += stepValue;
      this.fakeBoost = Math.round(current);
      this.updateDisplayedCount();
      step++;
      
      if (step >= steps) {
        this.fakeBoost = to;
        this.updateDisplayedCount();
        clearInterval(transition);
        console.log(`User count smooth transition complete: ${from} → ${to} fake users`);
      }
    }, 2000); // Change every 2 seconds for smooth effect
  }
  
  initFirebase() {
    try {
      // Initialize Firebase
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      
      this.database = firebase.database();
      this.usersRef = this.database.ref('activeUsers');
      this.userRef = this.usersRef.child(this.userId);
      
      this.setupUserPresence();
      this.listenToUserCount();
      
    } catch (error) {
      console.log('Firebase not configured yet. Using fallback counter.');
      this.fallbackCounter();
    }
  }
  
  setupUserPresence() {
    // Set user as online
    this.userRef.set({
      online: true,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      userAgent: navigator.userAgent.substring(0, 100) // First 100 chars for privacy
    });
    
    // Remove user when they disconnect
    this.userRef.onDisconnect().remove();
    
    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.userRef.set({
          online: false,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        });
      } else {
        this.userRef.set({
          online: true,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          userAgent: navigator.userAgent.substring(0, 100)
        });
      }
    });
    
    // Clean up when page unloads
    window.addEventListener('beforeunload', () => {
      this.userRef.remove();
    });
  }
  
  listenToUserCount() {
    this.usersRef.on('value', (snapshot) => {
      let activeCount = 0;
      const currentTime = Date.now();
      
      snapshot.forEach((userSnapshot) => {
        const userData = userSnapshot.val();
        if (userData.online) {
          // Only count users active in the last 5 minutes
          const userTime = userData.timestamp || 0;
          if (currentTime - userTime < 300000) { // 5 minutes
            activeCount++;
          }
        }
      });
      
      // Ensure minimum of 1 user (the current user)
      this.realUserCount = Math.max(1, activeCount);
      this.updateDisplayedCount();
    });
    
    // Clean up old/inactive users every 2 minutes
    setInterval(() => {
      this.cleanupInactiveUsers();
    }, 120000);
  }
  
  cleanupInactiveUsers() {
    const currentTime = Date.now();
    this.usersRef.once('value', (snapshot) => {
      snapshot.forEach((userSnapshot) => {
        const userData = userSnapshot.val();
        const userTime = userData.timestamp || 0;
        
        // Remove users inactive for more than 10 minutes
        if (currentTime - userTime > 600000) {
          userSnapshot.ref.remove();
        }
      });
    });
  }
  
  updateDisplayedCount() {
    const totalCount = this.realUserCount + this.fakeBoost;
    const currentDisplayed = parseInt(this.countElement.textContent) || 0;
    
    if (currentDisplayed !== totalCount) {
      this.animateCountChange(currentDisplayed, totalCount);
    }
  }
  
  animateCountChange(from, to) {
    const steps = 10;
    const stepValue = (to - from) / steps;
    let current = from;
    let step = 0;
    
    const animation = setInterval(() => {
      current += stepValue;
      this.countElement.textContent = Math.round(current);
      step++;
      
      if (step >= steps) {
        this.countElement.textContent = to;
        clearInterval(animation);
      }
    }, 50);
  }
  
  // Fallback for when Firebase isn't configured
  fallbackCounter() {
    console.log('Using fallback counter - please configure Firebase for real-time users');
    this.realUserCount = 1;
    this.updateDisplayedCount();
    
    // Simulate real user changes occasionally
    setInterval(() => {
      const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
      this.realUserCount = Math.max(1, Math.min(5, this.realUserCount + change));
      this.updateDisplayedCount();
    }, 15000);
  }
  
  // Public method to get current count
  getCurrentCount() {
    return parseInt(this.countElement.textContent) || 0;
  }
  
  // Debug method to see breakdown
  getCountBreakdown() {
    return {
      total: this.getCurrentCount(),
      real: this.realUserCount,
      fake: this.fakeBoost
    };
  }
}

// Initialize the quiz app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new QuizApp();
  new RealTimeUsersCounter();
});
