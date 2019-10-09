import { mod11 } from '../../utils/mod11';

// https://www.brreg.no/om-oss/oppgavene-vare/alle-registrene-vare/om-enhetsregisteret/organisasjonsnummeret/
export const isValidOrganizationNumber = (OrganizationNumber: string): boolean => {
	const trimmed = ('' + OrganizationNumber).replace(/\./g, '').trim();
	return /^\d{9}$/.test(trimmed) && mod11(trimmed.substr(0, 8)) === parseInt(trimmed.substr(-1),10);
}
