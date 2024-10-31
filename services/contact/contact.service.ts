import { ContactLink, contactLinks, ContactLinkType } from "@/services/contact/contactLinks";

export class ContactService {
  static getContacts() {
    return contactLinks;
  }

  static getContactByType(type: ContactLinkType): ContactLink {
    const contact = this.getContacts().find((contact) => contact.type === type);

    if (!contact) {
      throw new Error(`Contact link of type ${type} not found`);
    }

    return contact;
  }
}
