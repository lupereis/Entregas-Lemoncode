console.log("");
console.log("************** CHALLENGES *********************");

// ********************** Ejercicio tree. **********************
console.log (" ---- Retos.5 tree ---");

// Se define una interfaz para representar cada nodo del árbol, con el valor del nodo yn un array opcional de nodos hijos
interface NodeTree <T> {
  nodeValue: T;
  children?: NodeTree<T>[];
}

// Se define una clase Tree para representar al árbol
class Tree <T>{
  root: NodeTree<T>;
  
  // Constructor para inicializar el árbol
  constructor(rootValue: T) {
    this.root = {nodeValue: rootValue, children: []}
  }

  // Función para añadir un hijo a un nodo específico
  addChild = (parentNode:NodeTree<T>, childValue: T): NodeTree<T> => {
    const newChild: NodeTree<T> = {nodeValue: childValue, children: []};
    parentNode.children.push(newChild);
    return newChild;
  }

  // Función para recorrer el árbol y ejecutar una función callback en cada nodo
  traverseTree(callback: (node: NodeTree<T>) => void): void {
    function visitTree (node: NodeTree<T>): void {
      callback(node);
      node.children.forEach(visitTree);
    }
    visitTree(this.root);
  }
 
}


// ******* Ejemplos de uso *******

// Se crea un árbol con un nodo raíz
const tree= new Tree<string>("root");

// Se añaden hijos a la raiz
const child1 = tree.addChild(tree.root, "child 1");
const child2= tree.addChild(tree.root, "child 2");

// Se añaden hijos a los nodos hijos
const child1_1 = tree.addChild(child1, "child 1_1");
const child2_1 = tree.addChild(child2, "child 2_1");
const child2_2 = tree.addChild(child2, "child 2_2");
const child2_1_1 = tree.addChild(child2_1, "child 2_1_1");

// Se imprimen los valores de los nodos reccorriendo el árbol
tree.traverseTree(node => {
  console.log(node.nodeValue);
})