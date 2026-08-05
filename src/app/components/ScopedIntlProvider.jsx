import { NextIntlClientProvider } from "next-intl";

function mergeDeep(target, source) {
  Object.entries(source).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      target[key] = value;
      return;
    }

    if (value && typeof value === "object") {
      if (!target[key] || typeof target[key] !== "object" || Array.isArray(target[key])) {
        target[key] = {};
      }

      mergeDeep(target[key], value);
      return;
    }

    target[key] = value;
  });
}

function getDeepValue(source, path) {
  return path.split(".").reduce((current, segment) => {
    if (current == null) {
      return undefined;
    }

    return current[segment];
  }, source);
}

function setDeepValue(target, path, value) {
  const segments = path.split(".");
  const lastSegment = segments.pop();
  let current = target;

  segments.forEach((segment) => {
    if (!current[segment] || typeof current[segment] !== "object" || Array.isArray(current[segment])) {
      current[segment] = {};
    }

    current = current[segment];
  });

  current[lastSegment] = value;
}

function pickNamespaces(messages, namespaces) {
  const scopedMessages = {};

  namespaces.forEach((namespace) => {
    const value = getDeepValue(messages, namespace);

    if (value === undefined) {
      return;
    }

    const nestedValue = {};
    setDeepValue(nestedValue, namespace, value);
    mergeDeep(scopedMessages, nestedValue);
  });

  return scopedMessages;
}

export default async function ScopedIntlProvider({ locale, namespaces, children }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={pickNamespaces(messages, namespaces)}>
      {children}
    </NextIntlClientProvider>
  );
}
