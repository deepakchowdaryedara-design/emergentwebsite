/**
 * URL topic for the shared contact form. Distinguishes general inquiries from
 * scheduled consultation / scoping requests while keeping one form.
 * @typedef {'contact' | 'consultation'} ContactTopic
 */

export const CONTACT_TOPIC = {
  CONTACT: "contact",
  CONSULTATION: "consultation",
};

/**
 * @param {string} pathname
 * @param {ContactTopic | string} topic
 */
export function contactFormTo(pathname, topic = CONTACT_TOPIC.CONTACT) {
  const t =
    topic === CONTACT_TOPIC.CONSULTATION || topic === "consultation"
      ? CONTACT_TOPIC.CONSULTATION
      : CONTACT_TOPIC.CONTACT;
  return {
    pathname: pathname || "/",
    search: `?topic=${t}`,
    hash: "#page-contact",
  };
}
