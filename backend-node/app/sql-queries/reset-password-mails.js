import squel from 'squel';
import { TABLES, RESET_PASSWORD_MAILS_STATUSES } from '../constants';

const squelPostgres = squel.useFlavour('postgres');

const table = TABLES.RESET_PASSWORD_MAILS;
const columns = table.COLUMNS;

export function getSetAllPendingResetPasswordMailsStatusesToUnusedQuery(email) {
    return squelPostgres.update()
        .table(table.NAME)
        .set(columns.STATUS, RESET_PASSWORD_MAILS_STATUSES.UNUSED)
        .where(`${columns.EMAIL} = '${email}'`)
        .where(`${columns.STATUS} = '${RESET_PASSWORD_MAILS_STATUSES.PENDING}'`)
        .toString();
}

export function getSetResetPasswordMailExpiredByIdQuery(id) {
    return squelPostgres.update()
        .table(table.NAME)
        .set(columns.STATUS, RESET_PASSWORD_MAILS_STATUSES.EXPIRED)
        .where(`id = '${id}'`)
        .returning('*')
        .toString();
}

export function getSetResetPasswordMailUsedByIdQuery(id) {
    return squelPostgres.update()
        .table(table.NAME)
        .set(columns.STATUS, RESET_PASSWORD_MAILS_STATUSES.USED)
        .where(`id = '${id}'`)
        .returning('*')
        .toString();
}

export function getSelectResetPasswordMailByEmailQuery(email) {
    return squel.select()
        .from(table.NAME)
        .where(`${columns.EMAIL} = '${email}'`)
        .toString();
}

export function getSelectResetPasswordMailByIdQuery(id) {
    return squel.select()
        .from(table.NAME)
        .where(`id = '${id}'`)
        .toString();
}

export function getInsertResetPasswordMailQuery(mail) {
    return squelPostgres.insert()
        .into(table.NAME)
        .setFields(mail)
        .returning('*')
        .toString();
}

export function getDeleteResetPasswordMailByIdQuery(id) {
    return squelPostgres.delete()
        .from(table.NAME)
        .where(`id = '${id}'`)
        .returning('*')
        .toString();
}
