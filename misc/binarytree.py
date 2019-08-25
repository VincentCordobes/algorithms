class Tree:
    def __init__(self, value, left, right):
        self.value = value
        self.left = left
        self.right = right


def dfs_rec(tree):
    if tree is None:
        return ""
    print(tree.value)
    dfs_rec(tree.left)
    dfs_rec(tree.right)


def bfs(tree):
    queue = [tree]
    while len(queue) > 0:
        node = queue.pop(0)
        print(node.value)
        if node.left is not None:
            queue.append(node.left)
        if node.right is not None:
            queue.append(node.right)


def dfs(tree):
    stack = [tree]
    while len(stack) > 0:
        node = stack.pop()
        print(node.value)
        if node.right is not None:
            stack.append(node.right)
        if node.left is not None:
            stack.append(node.left)


tree = Tree(
    1,
    Tree(2, Tree(3, None, None), None),
    Tree(4, Tree(5, Tree(6, None, None), None), None),
)
dfs(tree)
