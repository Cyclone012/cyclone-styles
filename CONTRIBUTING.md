# Contributing to Cyclone Styles

Thank you for your interest in contributing to Cyclone Styles! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

1. **Search existing issues** first to avoid duplicates
2. **Use issue templates** when available
3. **Provide clear reproduction steps** with minimal code examples
4. **Include environment details** (React Native version, OS, device)

### Suggesting Features

1. **Check existing feature requests** to avoid duplicates
2. **Explain the use case** and why it would benefit the community
3. **Provide examples** of how the feature would be used
4. **Consider implementation complexity** and maintenance burden

### Pull Requests

1. **Fork the repository** and create a feature branch
2. **Follow the coding standards** described below
3. **Add tests** for new functionality
4. **Update documentation** as needed
5. **Keep commits focused** and write clear commit messages

## 🔧 Development Setup

### Prerequisites

- Node.js 16+ and npm/yarn
- React Native development environment
- TypeScript knowledge

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/Cyclone012/cyclone-styles.git
cd cyclone-styles

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test
```

### Project Structure

```
cyclone-styles/
├── src/                    # TypeScript source files
│   ├── index.ts           # Main exports
│   ├── cs.ts              # cs() function implementation
│   ├── styles.ts          # Utility styles object
│   └── theme.ts           # Theme system
├── lib/                   # Compiled JavaScript output
├── docs/                  # Documentation files
├── examples/              # Usage examples
└── tests/                 # Test files
```

## 📝 Coding Standards

### TypeScript

- Use strict TypeScript configuration
- Provide explicit types for public APIs
- Use meaningful variable and function names
- Add JSDoc comments for public functions

### Code Style

- Use Prettier for formatting (run `npm run format`)
- Use ESLint for code quality (run `npm run lint`)
- Follow existing patterns and conventions
- Keep functions focused and small

### Testing

- Write unit tests for new utility functions
- Test theme integration for new features
- Include responsive breakpoint tests
- Test both light and dark mode scenarios

Example test:

```typescript
describe("cs() function", () => {
  it("should convert basic classes to styles", () => {
    const result = cs("flex-1 bg-blue-500");
    expect(result).toEqual([{ flex: 1 }, { backgroundColor: "#3B82F6" }]);
  });

  it("should handle dark mode classes", () => {
    // Test dark mode functionality
  });
});
```

## 🎯 Contribution Areas

### High Impact Areas

1. **Performance Optimizations**: Caching, memoization, StyleSheet efficiency
2. **New Utility Classes**: Missing Tailwind utilities or React Native specific
3. **Theme System**: Enhanced theme capabilities, custom theme support
4. **Responsive Design**: Additional breakpoints, orientation handling
5. **Developer Experience**: Better TypeScript types, error messages, debugging

### Documentation

- Improve existing documentation clarity
- Add more usage examples
- Create video tutorials or demos
- Translate documentation to other languages

### Testing

- Increase test coverage
- Add integration tests
- Performance benchmarking
- Cross-platform testing (iOS/Android)

## 🚀 Release Process

### Versioning

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality (backward compatible)
- **PATCH** version for bug fixes (backward compatible)

### Changelog

- Update `CHANGELOG.md` for all changes
- Use clear, user-focused descriptions
- Group changes by type (Added, Changed, Fixed, Removed)
- Include migration notes for breaking changes

## 📋 Pull Request Checklist

Before submitting a pull request, ensure:

- [ ] **Code builds without errors** (`npm run build`)
- [ ] **All tests pass** (`npm test`)
- [ ] **Linting passes** (`npm run lint`)
- [ ] **TypeScript compilation succeeds**
- [ ] **Documentation updated** (if needed)
- [ ] **CHANGELOG.md updated** (if needed)
- [ ] **Examples added/updated** (for new features)
- [ ] **Responsive/dark mode tested** (if applicable)

## 🔍 Code Review Process

1. **Automated checks** must pass (CI/CD)
2. **Manual review** by maintainers
3. **Testing** on real devices when possible
4. **Performance impact** assessment
5. **Breaking change** evaluation

## 🌟 Recognition

Contributors will be:

- Listed in the README.md contributors section
- Credited in release notes for significant contributions
- Invited to provide input on major decisions
- Given priority support for their own issues

## 📞 Getting Help

- **GitHub Discussions**: For questions and brainstorming
- **GitHub Issues**: For bug reports and feature requests
- **Email**: cyclone@example.com for private matters

## 📄 License

By contributing to Cyclone Styles, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Cyclone Styles! 🌪️
