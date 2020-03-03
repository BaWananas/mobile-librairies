/**
 * Represent HATEOAS links.
 */
export class HypermediaLinks {
  /**
   * Link pointing the requested resource.
   */
  self: {
    href: string
  };

  /**
   * Various other links depending on the API and responses.
   */
  [s: string]: {
    href: string
  }
}
