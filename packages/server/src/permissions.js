const createResolver = (resolver) => {
  const baseResolver = resolver;
  baseResolver.createResolver = (childResolver) => {
    const newResolver = async (parent, args, context, info) => {
      await resolver(parent, args, context, info);
      return childResolver(parent, args, context, info);
    };
    return createResolver(newResolver);
  };
  return baseResolver;
};

// requiresAuth
export const requiresAuth = createResolver((parent, args, { user }) => {
  if (!user || !user.id) {
    throw new Error('Not authenticated');
  }
});


export const requiresAdmin = requiresAuth.createResolver((parent, args, { user }) => {
  if (!user.roleId || user.roleId !== 1) {
    throw new Error('Requires admin access');
  }
});

export const requiresAdminOrAssist = requiresAuth.createResolver((parent, args, { user }) => {
  if (!user.roleId || user.roleId === 3) {
    throw new Error('Requires admin access');
  }
});

